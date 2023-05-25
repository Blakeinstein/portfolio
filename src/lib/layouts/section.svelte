<main class="flex flex-col items-center justify-center gap-4 relative w-full h-dyn-screen">
	<background class="absolute inset-0 z-0">
		<slot name="background" />
	</background>
	<container class="z-10">
		<slot />
	</container>
</main>
