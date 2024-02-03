<script>
  import NavMenu from "./NavMenu.svelte";
  import TitleMain from "./TitleMain.svelte";
  import { page } from '$app/stores';
  
  $: current = $page.url.pathname?.split("/")?.[1];
</script>

<nav>
  <TitleMain />
  {#if current !== ""}
    <NavMenu />
  {/if}
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

  @media (min-width: 1024px) { 
    nav {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
</style>