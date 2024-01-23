<script lang="ts">
  import CopyWrite from "./CopyWrite.svelte";
	import Button from "$lib/components/elements/atoms/Button.svelte";
	import Icon from "@iconify/svelte";

</script>
<div class="skills-grid">
  <div class="skill grid-center">
    <div class="col">
      <CopyWrite />
      <Button class="copy-btn" href="/about" invert>
        More about me
        <Icon icon="mdi:arrow-right" class="icon" />
      </Button>
    </div>
  </div>
  <div class="skill grid-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, expedita?</div>
  <div class="skill grid-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, expedita?</div>
  <div class="skill grid-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, expedita?</div>
</div>

<style lang="postcss">
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    padding: 2rem;
  }

  .col {
    letter-spacing: 0.05em;
    color: var(--color-primary-content);
    line-height: 2rem;
    align-items: center;
    gap: 1rem;
    margin-top: -3rem;
  }

  .skill {
    &:first-child {
      border-right-width: 1px;
    }

    &:first-child, &:nth-child(2) {
      border-bottom-width: 1px;
    }

    &:nth-child(3) {
      border-right-width: 1px;
    }

    border: 0 solid currentColor;
    height: 40vmin;
    padding: 2rem;
  }
</style>