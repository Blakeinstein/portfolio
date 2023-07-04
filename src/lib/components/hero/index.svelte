<script>
	import { fade } from "svelte/transition";
  import Section from "$lib/layouts/section.svelte";
</script>
<Section class="flex justify-around">
  <div class="flex flex-col gap-4">
    <h1 out:fade class="text-9xl font-black">
      Hey all!
    </h1>
    <p class="text-lg prose max-w-md pr-20">
      I'm Rishikesh "Blaine" Anand, a developer, software engineer and a tech enthusiast.
      I love architecting solutions to real life problems, and bringing them to life in a user-friendly way!
    </p>
    <p class="text-sm prose max-w-md pl-20">
      I'm Rishikesh "Blaine" Anand, a developer, software engineer and a tech enthusiast.
      I love architecting solutions to real life problems, and bringing them to life in a user-friendly way!
    </p>
  </div>
  <div class="w-24 h-64 bg-orange-400">
  </div>
</Section>