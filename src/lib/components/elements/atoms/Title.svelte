<script lang="ts">
  import type { Snippet } from 'svelte';
  import classnames from "classnames";

  let { size = "md", noArrow = false, class: classesProp = "", children }: { size?: "sm" | "md" | "lg"; noArrow?: boolean; class?: string; children?: Snippet } = $props();

  let classes = $derived(classnames('header', size, classesProp, { 'arrow': !noArrow }));
</script>

<h1 class={classes}>
  {@render children?.()}
</h1>

<style>
.header {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font: var(--color-main);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
  line-height: 1;
  font-weight: 900;
}

.header.sm {
  font-size: 1.5rem;
}
.header.md {
  font-size: 3rem;
}
.header.lg {
  font-size: 4.5rem;
}

@media (min-width: 1024px) { 
  .header.sm {
    font-size: 3.75rem;
  }
  .header.md {
    font-size: 8rem;
  }
  .header.lg {
    font-size: 10rem;
  }
}

.arrow::before {
  content: "△";
  font-size: 0.65em;
}
</style>