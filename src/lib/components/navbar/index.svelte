<script>
	import Icon from "@iconify/svelte";
  import Link from "./Link.svelte";
  import { page } from '$app/stores';
  
  $: current = $page.url.pathname?.split("/")?.[1];
</script>

<nav>
  <a class="nav-title" href="/">
    <span class="title-main">
      Blaine
    </span>
    <span>
      .is-a.dev
    </span>
  </a>
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
    >
      <Icon class="icon" icon="akar-icons:github-fill" />
    </a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 1.5rem;
    height: 3rem;
    view-transition-name: header;
  }
  .nav-title {
    padding: 0.25rem 0.5rem;
    text-decoration: none;
  }

  .title-main {
    font-size: 1.875rem;
    line-height: 2.25rem;
    color: var(--color-primary-content);
    display: block;
    font-weight: 900;
  }

  .nav-menu {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .nav-external {
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  .nav-external:hover {
    background-color: var(--color-secondary);
    color: var(--color-secondary-content);
  }
  @media (min-width: 1024px) { 
    nav {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    .title-main {
      display: inline;
    }
  }
</style>