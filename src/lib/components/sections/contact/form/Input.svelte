<script lang="ts">
	import classNames from "classnames";
import type { HTMLInputTypeAttribute } from "svelte/elements";

  export let name: string;
  export let type: HTMLInputTypeAttribute | "TextArea";
  export let placeholder = "";
  let classes = "";
  export { classes as class };
</script>

<label class={classNames("flex flex-col gap-1 focus:font-semibold", classes)}>
  {name}
  {#if type === "TextArea"}
    <textarea name={name.toLowerCase()} required {placeholder}/>
  {:else}
    <input {type} name={name.toLowerCase()} required {placeholder}>
  {/if}
</label>

<style lang="postcss">
input[type="text"], input[type="email"], textarea {
  @apply grow w-full bg-transparent border-zinc-800 border-2 p-2 rounded-sm outline-none text-lg transition-all;

  &:focus {
    @apply bg-zinc-100 scale-105;
  }

  &:placeholder {
    @apply text-gray-400;
  }
}

textarea {
  @apply h-32;
}
</style>