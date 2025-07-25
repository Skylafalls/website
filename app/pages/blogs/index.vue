<script lang="ts" setup>
const { data: posts } = await useAsyncData(() => {
  return queryCollection('content')
    .select('title', 'description', 'path', 'id', 'date')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <div>
    <h1>Blog</h1>
    <p>Here is a list of blog posts I've made.</p>
    <p
      v-for="post in posts"
      :key="post.id"
    >
      >
      <NuxtLink :to="post.path">
        <strong>{{ post.title }}</strong>
      </NuxtLink>
      <br>
      => {{ post.description }}<br>
      => Written {{ post.date }}
    </p>
  </div>
</template>