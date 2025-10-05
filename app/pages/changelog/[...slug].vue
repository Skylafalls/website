<script lang="ts" setup>
const route = useRoute();
const pageId = computed(() => "changelog-" + route.path);
const { data: post } = await useAsyncData(pageId, () => queryCollection("changelogs")
  .path(route.path)
  .first());

const fullTitle = computed(() => {
  if (post.value?.title && post.value?.version) {
    return `${post.value.title} - v${post.value.version}`;
  }
  return "";
});

useSeoMeta({
  title: fullTitle.value,
  description: post.value?.description,
  author: "Sky",
});
</script>

<template>
  <div v-if="post">
    <NuxtLink to="/changelog">
      <small>« Back </small>
    </NuxtLink>
    <h1>{{ fullTitle }}</h1>
    <p>Released on {{ post.date }}.</p>
    <ContentRenderer :value="post" />
  </div>
  <div v-else>
    <h1>No such changelog</h1>
    <p>
      The changelog you asked for doesn't exist. You can go back
      <NuxtLink to="/changelog">here</NuxtLink>.
    </p>
  </div>
</template>

<style scoped>
* {
  font-family: Lexend;
}
</style>
