<script lang="ts">
	import classNames from "classnames";

  export let company: string;
  export let companyUrl: string;
  export let position: string;
  export let duration: string;
</script>

<div class="flex flex-col gap-2">
  <div class={
    classNames("flex justify-between items-end pb-2 border-black", {
      "border-b-[1px]": $$slots.default
    })
  }>
    <span class="flex items-end gap-2">
      <h2 class="text-3xl hover:cursor-pointer">
        <a href={companyUrl} class="underline" target="_blank" rel="noopener noreferrer">
          {company}
        </a>
      </h2>
      <span class="text-xl italic opacity-80">
        {position}
      </span>
    </span>
    <h1 class="text-xl">{duration}</h1>
  </div>
  {#if $$slots.default}
  <p class="text-slate-500 prose">
    <slot />
  </p>
  {/if}
</div>