<script lang="ts">
  export let skill: string;
  export let years: number;
  export let note: string | undefined = undefined;
</script>

<div class="exp-item">
  <span>
    <h2>
      {skill}
    </h2>
    {#if note}
      <em class="note">
        ({note})
      </em>
    {/if}
  </span>
  <div>
    {#if $$slots.default}
    <p>
      <slot />
    </p>
    {/if}
    <h4>{years} years</h4>
  </div>
</div>

<style>
.exp-item {
  padding: 0 1px 1rem;
  border-bottom: 1px solid var(--color-primary);
}

.exp-item:last-child {
  border-bottom: none;
}

.exp-item > * {
  align-items: flex-end;
}

.exp-item > div {
  display: flex;
  justify-content: space-between;
}

em, h4 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

em {
  opacity: 0.75;
}

p {
  color: var(--color-secondary);
  font-style: italic;
}

h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

h4 {
  flex-shrink: 0;
}
@media (min-width: 1024px) {
  .exp-item > span {
    display: flex;
    gap: 0.5rem;
  }
}
</style>