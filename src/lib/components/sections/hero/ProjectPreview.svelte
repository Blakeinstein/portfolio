<script>
	import Button from "$lib/components/elements/atoms/Button.svelte";
  import Section from "$lib/layouts/section.svelte";
	import Icon from "@iconify/svelte";

</script>
<Section>
  <div class="flex flex-col gap-4 mx-12">
    <img
      src="https://media0.giphy.com/media/dbtDDSvWErdf2/giphy.gif"
      alt="A gif of a cat playing with a ball of yarn"
      width="100%"
    />
    <Button href="/projects" class="self-end px-4 py-2 font-xl">
      Projects
      <Icon icon="mdi:arrow-right" class="w-6 h-6" />
    </Button>
  </div>
</Section>