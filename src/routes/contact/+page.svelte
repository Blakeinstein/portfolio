<script>
	import SEO from '$lib/components/SEO/index.svelte';
	import Form from "$lib/components/sections/contact/form/index.svelte";

	let seoProps = {
		breadcrumbs: [
			{
				name: 'Contact',
				slug: 'contact'
			}
		],
		title: 'Contact',
		slug: 'contact'
	};
</script>

<SEO {...seoProps} />
<Form />