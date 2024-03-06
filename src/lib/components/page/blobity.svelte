<script lang="ts">
	import Blobity from "blobity";
  import { blobityInstance } from "$lib/context";
	import { browser } from "$app/environment";


	if (browser) {
    const blob = new Blobity({
			licenseKey: "GPLv3",
			color: '#ffffff',
			opacity: 0.4,
			tooltipPadding: 10,
			size: 18,
			dotColor: '#fff',
			font: 'Outfit',
			fontColor: '#000000',
			fontSize: 18,
			focusableElements: 'h1, a, .checkbox, input::before, button, input, textarea, select, .header, .card, .icon'
		});
		blobityInstance.set(blob);

		blob['canvas'].style.zIndex = 0;
	}
</script>

<style>
	:global(html>canvas) {
		view-transition-name: blobity;
	}

	::view-transition-group(blobity) {
		animation: none;
	}
</style>