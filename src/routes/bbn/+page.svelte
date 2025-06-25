<script>
  import { bbnEmployees } from "../../db/bbn-employees";

</script>
<h1>About the foundation...</h1>
<p>
  <b>The BBN Foundation</b> is a little team of people who specializes in Fictional Googology.
  <br>
  Here's the current list of members:
</p>
<ol>
  {#each bbnEmployees as member}
    <li>
      {member}
    </li>
  {/each}
</ol>