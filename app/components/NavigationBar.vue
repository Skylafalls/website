<script setup lang="ts">
const { data: blogPosts } = await useAsyncData(() => queryCollection("content")
  .select("title", "path", "id", "date")
  .order("date", "DESC")
  .all());
</script>

<template>
  <div class="navbar">
    <NuxtLink href="/" class="navbar-item">Home</NuxtLink>
    <NuxtLink href="/docs" class="navbar-item">Documents</NuxtLink>
    <NuxtLink href="/about" class="navbar-item">About Me</NuxtLink>
    <div class="dropdown">
      <NuxtLink href="/blogs" class="dropbtn" style="display: block;">
        Blog Posts
        <i class="fa fa-caret-down"/>
      </NuxtLink>
      <div class="dropdown-content">
        <NuxtLink v-for="post in blogPosts" :key="post.id" :href="post.path">
          {{ post.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.navbar {
  overflow: hidden;
  background-color: #0c0154;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar-item {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar-item:hover, .dropbtn:hover {
  background-color: red;
  animation: navbar 0.1s linear;
}

@keyframes navbar {
  0% {
    background-color: hsl(248, 98%, 17%);
  }
  100% {
    background-color: red;
  }
}

@keyframes dropdown-content-anim {
  0% {
    background-color: #f9f9f9;
  }
  100% {
    background-color: #ddd;
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content * {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content *:hover {
  animation: dropdown-content-anim 0.2s linear;
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
