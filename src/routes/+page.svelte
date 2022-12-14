<script lang="ts">
  import SEO from '$lib/components/SEO/index.svelte';

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

<h1 class="text-5xl">This is some overlay text</h1>
