<script lang="ts">
	import classNames from "classnames";

  export let company: string;
  export let companyUrl: string;
  export let position: string;
  export let duration: string;
</script>

<div class="col">
  <div class={
    classNames("work-title", {
      "border-b-[1px]": $$slots.default
    })
  }>
    <a href={companyUrl} class="underline" target="_blank" rel="noopener noreferrer">
      <h2>
        {company}
      </h2>
    </a>
    <em>
      {position}
    </em>
    <h5>{duration}</h5>
  </div>
  {#if $$slots.default}
  <p>
    <slot />
  </p>
  {/if}
</div>

<style>
  .col {
    gap: 0.5rem;
  }

  .work-title {
    display: grid;
    flex-grow: 1;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
    padding-bottom: 0.5rem;
  }

  a {
    color: var(--color-main);
  }

  h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    grid-column: span 2 / span 2;
  }
  em, h5 {
    font-size: 1.25rem;
  }

  em {
    opacity: 0.75;
    line-height: 2;
    text-align: right;
  }

  h5 {
    flex-grow: 1;
    flex-shrink: 0;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    .work-title {
      display: flex;
      align-items: flex-end;
    }

    h5 {
      text-align: right;
    }

    em {
      line-height: 1.75rem;
    }
   }
</style>