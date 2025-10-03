<template>
  <div>
    <h1>Documents</h1>
    <p>This page contains a list of the documents that I currently own so far.</p>
    <ol>
      <li v-for="item of documents" :Key="item.id">
        <h3 :id="item.id">
          <a :href="item.documentLink" target="_blank">
            {{ item.docHeading }}
          </a>
        </h3>
        <ul>
          <li v-for="info of item.arrayOfInfo" :key="info">
            {{ info }}
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import { documents } from "~/db/docs";
</script>
