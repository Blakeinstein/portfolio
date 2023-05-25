<script lang="ts">
  import SEO from '$lib/components/SEO/index.svelte';
  import BuildingScene from '$lib/components/buildings/scene.svelte';
	import Section from '$lib/layouts/section.svelte';

  let seoProps = {
    breadcrumbs: [{
      name: 'home',
      slug: '',
    }],
    title: 'Home',
    slug: '',
  };
</script>

<SEO {...seoProps} />

<Section>
  <svelete:fragment slot="background">
    <BuildingScene/>
  </svelete:fragment>

  <h1 class="text-5xl">This is some overlay text</h1>
</Section>
