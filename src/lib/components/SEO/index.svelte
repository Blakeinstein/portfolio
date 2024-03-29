<script lang="ts">
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
	// export let ogSquareImageSrc = '$lib/assets/home/home-open-graph-square.jpg';
	export let ogSquareImageSrc = '/logo.svg';
	// export let ogImageSrc = '$lib/assets/home/home-open-graph.jpg';
	export let ogImageSrc = '/logo.svg';
	// export let twitterImageSrc = '$lib/assets/home/home-twitter.jpg';
	export let twitterImageSrc = '/logo.svg';
	// export let featuredImageSrc = '$lib/assets/home/home.jpg';
	export let featuredImageSrc = '/logo.svg';

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
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<meta name="msapplication-TileColor" content="#0A0B0D">
	<meta name="theme-color" content="#0A0B0D">
	<link rel="preconnect" href="https://api.fontshare.com">
	<link rel="preconnect" href="https://cdn.fontshare.com">
	<link rel="preconnect" href="https://api.iconify.design">
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
