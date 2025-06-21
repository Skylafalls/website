<script lang="ts">
  import { page } from "$app/state";
</script>

<h1>{page.status}: {page.error?.message}</h1>
{#if page.status >= 400 && page.status < 500}
  <p>Oops, you did something wrong.</p>
{:else if page.status >= 500}
  <p>Oops, I broke something. I'll fix it later.</p>
{/if}