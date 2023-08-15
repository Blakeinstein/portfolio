<script>
	import Link from "./Link.svelte";
</script>

<nav class="flex justify-between px-12 h-12 items-center py-10">
  <a class="px-2 py-1" href="/">
    <span class="text-3xl font-black">
      Blaine
    </span>
    <span>
      .is-a.dev
    </span>
  </a>
  <div class="flex gap-4">
    <Link href="/contact">Contact</Link>
    <Link href="/about">About</Link>
  </div>
</nav>