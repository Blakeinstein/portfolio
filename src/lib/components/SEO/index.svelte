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

	const defaultAlt = 'some unoriginal picture';

	let {
		article = false,
		breadcrumbs = [] as BreadcrumbMeta[],
		entityMeta = null,
		lastUpdated = Date.now().toString(),
		datePublished = Date.now().toString(),
		metadescription = 'Portfolio',
		slug,
		timeToRead = 0,
		title = siteTitle,
		ogSquareImageSrc = '/logo.svg',
		ogImageSrc = '/logo.svg',
		twitterImageSrc = '/logo.svg',
		featuredImageSrc = '/logo.svg',
		featuredImage = {
			url: featuredImageSrc,
			alt: defaultAlt,
			width: 672,
			height: 448,
			caption: 'Home page'
		} as ImageResource,
		ogImage = {
			url: ogImageSrc,
			alt: defaultAlt
		} as ImageResource,
		ogSquareImage = {
			url: ogSquareImageSrc,
			alt: defaultAlt
		} as ImageResource,
		twitterImage = {
			url: twitterImageSrc,
			alt: defaultAlt
		} as ImageResource,
	}: {
		article?: boolean;
		breadcrumbs?: BreadcrumbMeta[];
		entityMeta?: null;
		lastUpdated?: string;
		datePublished?: string;
		metadescription?: string;
		slug: string;
		timeToRead?: number;
		title?: string;
		ogSquareImageSrc?: string;
		ogImageSrc?: string;
		twitterImageSrc?: string;
		featuredImageSrc?: string;
		featuredImage?: ImageResource;
		ogImage?: ImageResource;
		ogSquareImage?: ImageResource;
		twitterImage?: ImageResource;
	} = $props();
	let url = $derived(`${siteUrl}/${slug}`);
	let pageTitle = $derived(`${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`);
	let openGraphProps = $derived({
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
	});
	let schemaOrgProps = $derived({
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
	});
	let twitterProps = $derived({
		article,
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead
	});
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
