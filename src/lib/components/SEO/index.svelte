<script lang="ts">
	import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/home/home.jpg';
	import website from '$lib/config/website';
	import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
	import type { ImageResource } from '$lib/types/data';
	import type { BreadcrumbMeta } from '$lib/types/seo';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import Twitter from './Twitter.svelte';

	const {
		author,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		linkedinProfile,
		twitterUsername
	} = website;

	export let article = false;
	export let breadcrumbs: BreadcrumbMeta[] = [];
	export let entityMeta = null;
	export let lastUpdated: string = Date.now().toString();
	export let datePublished: string = Date.now().toString();
	export let metadescription = 'Portfolio';
	export let slug: string;
	export let timeToRead = 0;
	export let title: string = siteTitle;

	const defaultAlt = 'some unoriginal picture';

	export let featuredImage: ImageResource = {
		url: featuredImageSrc,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	export let ogImage: ImageResource = {
		url: ogImageSrc,
		alt: defaultAlt
	};
	export let ogSquareImage: ImageResource = {
		url: ogSquareImageSrc,
		alt: defaultAlt
	};
	export let twitterImage: ImageResource = {
		url: twitterImageSrc,
		alt: defaultAlt
	};
	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated } : {})
	};
	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		lastUpdated,
		entity: title,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		githubPage,
		linkedinProfile,
		twitterUsername
	};
	const twitterProps = {
		article,
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
