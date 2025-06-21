<script lang="ts">
  interface DocItemProps {
    docHeading: string
    documentLink: string
    arrayOfInfo: Array<string>
    id: string
  }

  const { docHeading, documentLink, arrayOfInfo, id }: DocItemProps = $props();
</script>
<li>
  <h2 id="{id}">
    <a href="{documentLink}" target="_blank">
      {docHeading}
    </a>
  </h2>
  <ul>
    {#each arrayOfInfo as information}
      <li>{information}</li>
    {/each}
  </ul>
</li>