<script lang="ts">
  let { top = "0%", left = "0%", vertical = false }: { top?: string; left?: string; vertical?: boolean } = $props();
</script>

<hr
  class={"wf " + (vertical ? "vertical" : "")}
  style:top
  style:left
>

<style>
  hr {
    position: absolute;
    opacity: 50%;
    border: 0;
    background: var(--color-white);
    height: 1px;
  }
  hr.vertical {
    width: 1px;
    height: 100%;
  }
</style>