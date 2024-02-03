<script lang="ts">
	import Icon from "@iconify/svelte";
  import Link from "./Link.svelte";
  import { page } from '$app/stores';
  
  $: current = $page.url.pathname?.split("/")?.[1];
</script>

<div class="nav-menu">
  <Link href="/about" {current}>About</Link>
  <Link href="/projects" {current}>Projects</Link>
  <Link href="/contact" {current}>Contact</Link>
  <a
    class="nav-external"
    href="https://github.com/blakeinstein"
    target="_blank"
    rel="noopener noreferrer"
    data-blobity-tooltip="GitHub"
    aria-label="GitHub"
  >
    <Icon class="icon" icon="akar-icons:github-fill" />
  </a>
</div>

<style lang="postcss">
  .nav-menu {
    display: flex;
    gap: 1rem;
    align-items: center;
    view-transition-name: nav-menu;
  }

  .nav-external {
    color: var(--color-white);
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  .nav-external:hover {
    background-color: var(--color-accent);
    color: var(--color-bg-primary);
  }
</style>