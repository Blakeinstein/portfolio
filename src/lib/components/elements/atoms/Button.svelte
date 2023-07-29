<script lang="ts">
	import classNames from "classnames";

  export let buttonType: HTMLButtonElement["type"] = "button";
  let classes = "";
  export { classes as class };
</script>

<button
  type={buttonType}
  class={
    classNames(
      "flex gap-2 border-2 px-2 rounded-sm items-center transition-all",
      "border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white",
      "ghost-button",
      classes
    )
  }
>
  <slot name="icon" />
  <slot/>
</button> 

<style lang="postcss">
  .ghost-button {
    &:hover {
      box-shadow: 0 0 5px theme('colors.zinc.800'), 0 0 25px theme('colors.zinc.800'),
        0 0 50px theme('colors.zinc.800'), 0 0 100px theme('colors.zinc.800');
    }

    &:active {
      scale: 0.9;
    }
  }
</style>