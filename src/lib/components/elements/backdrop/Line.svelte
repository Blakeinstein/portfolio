<script lang="ts">
  export let top = "0%";
  export let left = "0%";
  export let vertical = false;
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
    background: var(--color-secondary-content);
    height: 1px;
  }
  hr.vertical {
    width: 1px;
    height: 100%;
  }
</style>