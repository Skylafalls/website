<script lang="ts">
  import DocumentListItem from "../../components/DocumentListItem.svelte";
  import { documents } from "../../db/docs";

</script>
<h1>Documents</h1>
<p>This page contains a list of the documents that I currently own so far.</p>
<ol>
  {#each documents as documentItem}
    <DocumentListItem
      id={documentItem.id}
      docHeading={documentItem.docHeading}
      documentLink={documentItem.documentLink}
      arrayOfInfo={documentItem.arrayOfInfo}
    />
  {/each}
</ol>