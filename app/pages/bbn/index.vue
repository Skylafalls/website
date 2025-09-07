<template>
  <div>
    <h1>About the foundation...</h1>
    <p>
      <b>The BBN Foundation</b> is an organization of people who specializes in Fictional Googology.
      <br>
      Here's the current list of members:
    </p>
    <ol>
      <li v-for="member of bbnEmployees" :key="member">{{ member }}</li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import { bbnEmployees } from "~/db/bbn-employees";
</script>
