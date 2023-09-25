<script>
	import Icon from "@iconify/svelte";
import Link from "./Link.svelte";
</script>

<nav class="flex justify-between px-6 lg:px-12 h-12 items-center py-10">
  <a class="px-2 py-1" href="/">
    <span class="text-3xl font-black block lg:inline">
      Blaine
    </span>
    <span>
      .is-a.dev
    </span>
  </a>
  <div class="flex gap-4 items-center">
    <Link href="/contact">Contact</Link>
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
    <a
      class="p-2 rounded-md hover:bg-slate-800 hover:text-white"
      href="https://github.com/blakeinstein"
      target="_blank"
      rel="noopener noreferrer"
      data-blobity-tooltip="GitHub"
    >
      <Icon class="fill-current w-6 h-6" icon="akar-icons:github-fill" />
    </a>
  </div>
</nav>