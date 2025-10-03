<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <NuxtLayout>
    <div class="prose">
      <template v-if="error.statusCode >= 400 && error.statusCode < 500">
        <h1>Ah shit ({{ error.statusCode }})</h1>
        <strong>{{ error.message }}</strong>
        <p>Um something went wrong on your side, so...</p>
      <a href="/" @click="handleError">Return to home I guess?</a>
      </template>
      <template v-else>
        <h1>Ah shit ({{ error.statusCode }})</h1>
        <strong>{{ error.message }}</strong>
        <p>Okay I fucked something up over here sorry.</p>
      <a href="/" @click="handleError">Return to home I guess?</a>
      </template>
    </div>
  </NuxtLayout>
</template>
