<script lang="ts">
  import { partytownSnippet } from '@builder.io/partytown/integration';
</script>

<svelte:head>
  <script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		};
	</script>
  {@html '<script>' + partytownSnippet() + '</script>'}
  <script type="text/partytown" src="https://plausible.blaine.vip/js/script.js" />
</svelte:head>