<script lang="ts">
	import type { ImageResource, Optional } from '$lib/types/data';
	import type { BreadcrumbMeta, EntityMeta } from '$lib/types/seo';
	import hash from 'object-hash';
	let {
		article = false,
		author,
		breadcrumbs,
		datePublished,
		lastUpdated,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt,
		siteUrl,
		title,
		url,
		githubPage,
		linkedinProfile,
		twitterUsername,
		entity,
		entityMeta = null,
	}: {
		article?: boolean;
		author: string;
		breadcrumbs: Optional<BreadcrumbMeta[]>;
		datePublished: string;
		lastUpdated: string;
		featuredImage: ImageResource;
		metadescription: string;
		siteLanguage: string;
		siteTitle: string;
		siteTitleAlt: string;
		siteUrl: string;
		title: string;
		url: string;
		githubPage: string;
		linkedinProfile: string;
		twitterUsername: string;
		entity: string;
		entityMeta?: Optional<EntityMeta>;
	} = $props();

	let entityHash = $derived(hash({ author }, { algorithm: 'md5' }));

	let schemaOrgEntity = $derived(
		entityMeta !== null
			? {
					'@type': ['Person', 'Organization'],
					'@id': `${siteUrl}/#/schema/person/${entityHash}`,
					name: author,
					image: {
						'@type': 'ImageObject',
						'@id': `${siteUrl}/#personlogo`,
						inLanguage: siteLanguage,
						url: entityMeta.url,
						width: entityMeta.faviconWidth,
						height: entityMeta.faviconHeight,
						caption: author
					},
					logo: {
						'@id': `${siteUrl}/#personlogo`
					},
					sameAs: [
						`https://twitter.com/${twitterUsername}`,
						`https://github.com/${githubPage}`,
						`https://linkedin.com/in/${linkedinProfile}`
					]
      }
			: null
	);

	let schemaOrgWebsite = $derived({
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		url: siteUrl,
		name: siteTitle,
		description: siteTitleAlt,
		publisher: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		potentialAction: [
			{
				'@type': 'SearchAction',
				target: `${siteUrl}/?s={search_term_string}`,
				'query-input': 'required name=search_term_string'
			}
		],
		inLanguage: siteLanguage
	});

	let schemaOrgImageObject = $derived({
		'@type': 'ImageObject',
		'@id': `${url}#primaryimage`,
		inLanguage: siteLanguage,
		url: featuredImage.url,
		contentUrl: featuredImage.url,
		width: featuredImage.width,
		height: featuredImage.height,
		caption: featuredImage.caption
	});

	let schemaOrgBreadcrumbList = $derived({
		'@type': 'BreadcrumbList',
		'@id': `${url}#breadcrumb`,
		itemListElement: breadcrumbs?.map((element, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'WebPage',
				'@id': `${siteUrl}/${element.slug}`,
				url: `${siteUrl}/${element.slug}`,
				name: element.name
			}
		}))
	});

	let schemaOrgWebPage = $derived({
		'@type': 'WebPage',
		'@id': `${url}#webpage`,
		url,
		name: title,
		isPartOf: {
			'@id': `${siteUrl}/#website`
		},
		primaryImageOfPage: {
			'@id': `${url}#primaryimage`
		},
		datePublished,
		dateModified: lastUpdated,
		author: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		description: metadescription,
		breadcrumb: {
			'@id': `${url}#breadcrumb`
		},
		inLanguage: siteLanguage,
		potentialAction: [
			{
				'@type': 'ReadAction',
				target: [url]
			}
		]
	});

	let schemaOrgArticle = $derived(article ? {
		'@type': 'Article',
		'@id': `${url}#article`,
		isPartOf: {
			'@id': `${url}#webpage`
		},
		author: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		headline: title,
		datePublished,
		dateModified: lastUpdated,
		mainEntityOfPage: {
			'@id': `${url}#webpage`
		},
		publisher: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		image: {
			'@id': `${url}#primaryimage`
		},
		articleSection: ['blog'],
		inLanguage: siteLanguage
	} : null);

	let schemaOrgPublisher = $derived({
		'@type': ['Person', 'Organization'],
		'@id': `${siteUrl}/#/schema/person/${entityHash}`,
		name: entity,
		image: {
			'@type': 'ImageObject',
			'@id': `${siteUrl}/#personlogo`,
			inLanguage: siteLanguage,
			url: `${siteUrl}/assets/rodneylab-logo.png`,
			contentUrl: `${siteUrl}/assets/rodneylab-logo.png`,
			width: 512,
			height: 512,
			caption: entity
		},
		logo: {
			'@id': `${siteUrl}/#personlogo`
		},
		sameAs: [
			`https://twitter.com/${twitterUsername}`,
			`https://github.com/${githubPage}`,
			`https://linkedin.com/in/${linkedinProfile}`
		]
	});

	let schemaOrgArray = $derived([
		schemaOrgEntity,
		schemaOrgWebsite,
		schemaOrgImageObject,
		schemaOrgWebPage,
		schemaOrgBreadcrumbList,
		...(article ? [schemaOrgArticle] : []),
		schemaOrgPublisher
	]);
	let schemaOrgObject = $derived({
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	});
	let jsonLdString = $derived(JSON.stringify(schemaOrgObject));
	let jsonLdScript = $derived(`
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`);
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
