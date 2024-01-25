<script lang="ts">
  import { SocialData } from "$lib/data/SocialData";
	import SocialGroup from "./SocialGroup.svelte";

</script>
<div class="social-box col">
  <h3>Find me on</h3>
  <div class="social-container">
    {#each Object.values(SocialData) as socials}
      <SocialGroup socials={socials} />
    {/each}
  </div>
</div>

<style>
  .social-box {
    flex-grow: 1;
    gap: 1rem;
    align-items: center;
  }

  .social-container {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
</style>

