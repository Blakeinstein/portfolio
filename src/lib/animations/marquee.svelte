<script lang="ts">
  import classNames from "classnames";

  export let pauseOnHover = false;

  let classes = "";
  export let speed = "20s";
  export let gap = "1rem";
  export {
    classes as class,
  };
</script>

<div
  class={classNames(
    "marquee", 
    {
      "pause-on-hover": pauseOnHover,
    },
    classes
  )}
  style:--animation-speed={speed}
  style:--gap={gap}
>
  <div>
    <slot />
  </div>
  <div aria-hidden="true">
    <slot />
  </div>
</div>

<style lang="postcss">
  .marquee {
    position: relative;
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);

    div {
      flex-shrink: 0;
      display: flex;
      justify-content: space-around;
      gap: var(--gap);
      min-width: 100%;
      animation: scroll var(--animation-speed) linear infinite;
    }

    &.pause-on-hover:hover div {
      animation-play-state: paused;
    }
  }

  @keyframes scroll {
    from {
      translate: 0;
    }
    to {
      translate: calc(-100% - var(--gap));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee div {
      display: flex;
      flex-wrap: wrap;
      animation-play-state: paused !important;
    }
  }

</style>
