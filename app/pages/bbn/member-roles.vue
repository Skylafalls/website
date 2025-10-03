<script setup lang="ts">
import { roles } from "~/db/bbn-roles";

function captialize(str: string): string {
  return str[0]?.toUpperCase() + str.slice(1);
}
</script>

<template>
  <div>
    <h1>BBN Roles</h1>
    <p>There are 4 kinds of roles you can have within the foundation, which we will show now.</p>
    <template v-for="role in roles" :key="role.name">
      <h2>{{ captialize(role.name) }}</h2>
      <p>{{ role.description }}</p>
      <h3>Requirements:</h3>
      <ul><li v-for="req in role.requirements" :key="req">{{ req }}</li></ul>
    </template>
  </div>
</template>
