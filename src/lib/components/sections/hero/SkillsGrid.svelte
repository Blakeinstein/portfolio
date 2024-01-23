<script lang="ts">
  import CopyWrite from "./CopyWrite.svelte";
	import Button from "$lib/components/elements/atoms/Button.svelte";
	import Icon from "@iconify/svelte";

</script>
<div class="col">
  <CopyWrite />
  <Button class="copy-btn" href="/about">
    More about me
    <Icon icon="mdi:arrow-right" class="icon" />
  </Button>
</div>

<style lang="postcss">
.col {
  letter-spacing: 0.05em;
  line-height: 2rem;
  align-items: center;
  gap: 1rem;
  margin-top: -3rem;
}
</style>