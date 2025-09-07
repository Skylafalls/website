<script lang="ts" setup>
const route = useRoute();
const pageId = computed(() => "blog-" + route.path);
const { data: post } = await useAsyncData(pageId, () => queryCollection("content")
  .path(route.path)
  .first());

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});
</script>

<template>
  <div v-if="post">
    <NuxtLink to="/blogs">
      <small>« Back </small>
    </NuxtLink>
    <h1>{{ post.title }}</h1>
    <small>Written up on {{ post.date }}.</small>
    <ContentRenderer :value="post" />
  </div>
  <div v-else>
    <h1>No such post</h1>
    <p>
      Sorry uhh that blog post doesn't exist. You can go back home
      <NuxtLink to="/blogs">here</NuxtLink>.
    </p>
  </div>
</template>
