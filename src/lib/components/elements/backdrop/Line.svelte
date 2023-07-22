<script lang="ts">
	import classNames from "classnames";

  export let top = "0%";
  export let left = "0%";
  export let vertical: boolean = false;
</script>

<hr
  class={
    classNames(
      "absolute opacity-50 border-0 bg-zinc-500",
      {
        "w-px h-full": vertical,
        "h-px w-full": !vertical,
      }
    )
  }
  style:top
  style:left
>