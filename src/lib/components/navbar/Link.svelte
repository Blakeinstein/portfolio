<script lang="ts">
	import classNames from "classnames";

  export let href: string;
  export let current: string;
  export let highlightOn: string;
  let classes = "";

  export { classes as class };

  $: active = href.split("/")?.[1] === current;
</script>

<a
  href="{href}"
  class={
    classNames(
      "rounded-md relative p-2 py-1",
      classes,
      {
        "sparkles": current === highlightOn
      }
    )
  }
  aria-current={active? "page" : undefined}
>
  <slot />  
</a>

<style lang="postcss">
  
a[aria-current='page']::before {
  @apply  bg-slate-800 absolute;
  height: 1px;
  bottom: 0.25em;
  width: calc(100% - 1em);
  content: '';
  view-transition-name: active-header-item;
}


/* .sparkles {
  @apply relative font-bold;
  z-index: 10; */

  /* &::before {
    content: '';
    @apply absolute;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    background-image: url(/sparkle.png);
    background-size: 100% 100%;
    mix-blend-mode: overlay;
    border-radius: 50%;
    opacity: 20%;
  } */
/* } */
</style>