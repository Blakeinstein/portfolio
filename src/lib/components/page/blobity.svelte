<script lang="ts">
	import Blobity from "blobity";
  import { blobityInstance } from "$lib/context";
	import { browser } from "$app/environment";


	if (browser) {
    const blob = new Blobity({
			licenseKey: "GPLv3",
			color: '#0c0400',
			opacity: 0.35,
			tooltipPadding: 10,
			size: 28,
			dotColor: '#333333',
			font: 'Red Hat Display',
			fontColor: '#ffffff',
			fontSize: 28,
			focusableElements: 'h1, a, .checkbox, input::before, button, input, textarea, select, .header, .ellipses-orbit, [data-blobity-tooltip], .card',
			mode: 'slow',
		});
		blobityInstance.set(blob);

		blob['canvas'].style.zIndex = 0;
	}
</script>