<script lang="ts" setup>
const { data: posts } = await useAsyncData(() => queryCollection("changelogs")
  .select("title", "path", "id", "date", "version")
  .order("date", "DESC")
  .all());
</script>

<template>
  <div>
    <h1>Changelog</h1>
    <p>Here is a list of changelogs that I made.</p>
    <p
      v-for="post in posts"
      :key="post.id"
    >
      >
      <NuxtLink :to="post.path">
        <strong>{{ post.title }}</strong>
      </NuxtLink>
      <br>
      => Released {{ post.date }} (version {{ post.version }})
    </p>
  </div>
</template>
