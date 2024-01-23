<script lang="ts">
  import classnames from "classnames";

  let classes = "";
  export let size: "sm" | "md" | "lg" = "md";
  export let noArrow = false;
  export { classes as class };

  $: classes = classnames('header', size, classes,
  {
    'arrow': !noArrow,
  });
</script>

<h1 class={classes}>
  <slot />
</h1>

<style>
.header {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font: var(--color-primary);
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