<script lang="ts">
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  export let name: string;
  export let type: HTMLInputTypeAttribute | "TextArea";
  export let placeholder = "";
  let classes = "";
  export { classes as class };
</script>

<label class={"col " + classes}>
  {name}
  {#if type === "TextArea"}
    <textarea name={name.toLowerCase()} required {placeholder}/>
  {:else}
    <input {type} name={name.toLowerCase()} required {placeholder}>
  {/if}
</label>

<style lang="postcss">
label {
  gap: 0.25rem;
}

label:focus {
  font-weight: 600;
}

input[type="text"], input[type="email"], textarea {
  flex-grow: 1;
  width: 100%;
  background-color: transparent;
  border: 2px solid var(--color-primary-content);
  padding: 0.5rem;
  border-radius: 0.125rem;
  outline: none;
  font-size: 1.125rem;
  line-height: 1.75rem;
  transition: all var(--transition-duration) var(--transition-timing);

  &:focus {
    background-color: var(--color-primary);
    scale: 1.05;
  }

  &:placeholder {
    background-color: var(--color-secondary-content);
  }
}

textarea {
  height: 8rem;
}
</style>