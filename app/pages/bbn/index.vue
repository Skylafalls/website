<template>
  <div>
    <h1>About the foundation...</h1>
    <p>
      <b>The BBN Foundation</b> is an organization of people who specializes in Fictional Googology. Our goal is to provide neceessary resources in order to de-mystify and remove the complications from working in FG.
      <br>
      Currently our main focus is to work on standardizing some of the crazier aspects of Fictional Googology such as scaling and concepts.
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
