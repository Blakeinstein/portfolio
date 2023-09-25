<script lang="ts">
	import classNames from "classnames";

  export let skill: string;
  export let years: number;
  export let note: string | undefined = undefined;
  export let last = false;
</script>

<div class={classNames("px-px pb-4 border-black", { "border-b-[1px]": !last})}>
  <span class="lg:flex items-end gap-2">
    <h2 class="text-3xl">
      {skill}
    </h2>
    {#if note}
      <span class="text-xl opacity-75 italic">
        ({note})
      </span>
    {/if}
  </span>
  <div class="flex justify-between items-end">
    {#if $$slots.default}
    <p class="text-slate-500 italic">
      <slot />
    </p>
    {/if}
    <h1 class="text-xl shrink-0">{years} years</h1>
  </div>
</div>