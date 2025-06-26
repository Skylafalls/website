<script lang="ts">
  import { documents } from "../../db/docs";

</script>
<h1>Documents</h1>
<p>This page contains a list of the documents that I currently own so far.</p>
<ol>
  {#each documents as documentItem}
    <li>
      <h2 id="{documentItem.id}">
        <a href="{documentItem.documentLink}" target="_blank">
          {documentItem.docHeading}
        </a>
      </h2>
      <ul>
        {#each documentItem.arrayOfInfo as information}
          <li>{information}</li>
        {/each}
      </ul>
    </li>
  {/each}
</ol>