<script lang="ts">
	import Section from "$lib/layouts/section.svelte";
	import Title from "../../../elements/atoms/Title.svelte";
  import { SocialData } from "$lib/data/SocialData";
	import SocialGroup from "./SocialGroup.svelte";

</script>
<Section>
  <Title noArrow size="sm" class="mb-4">Find me on:</Title>
  <div class="wf social-container">
    <div class="wf">
      {#each Object.entries(SocialData) as [groupName, socials]}
        <SocialGroup groupName={groupName} socials={socials} />
      {/each}
    </div>
  </div>
</Section>

<style>
  .social-container {
    height: 100%;
    border-radius: 0.5rem;
    background-color: var(--color-social);
    padding: 4rem 0;
  }
  .social-container > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    gap: 0.125rem;
  }
</style>

