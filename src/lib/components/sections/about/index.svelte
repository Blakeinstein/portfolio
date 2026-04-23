<script>
  import Image from '$lib/components/elements/atoms/image/Elastic.svelte';
  import Section from "$lib/layouts/section.svelte";
	import Title from "$lib/components/elements/atoms/Title.svelte";
</script>
<Section class="col about" head>
  <div class="image-container">

  </div>
  <Image src="dp.avif" alt="hero image" class="about-image"/>
  <div class="col gap">
    <Title noArrow>
      Hey all!
    </Title>
    <p class="leader-text">
      I'm <b>Rishikesh "Blaine" Anand</b>. I work as an AI software and full-stack engineer, and I care most about agentic
      systems, ML platforms, and shipping things that hold up in production. I like getting from a real problem to something
      people can actually use—clearly, reliably, and without me hand-waving the hard parts.
    </p>
    <p class="subtext">
      I still think of myself as someone who can stretch across a stack: I'll dig in until I understand the problem well enough
      to pick a sane approach, and I get a lot of satisfaction from learning tools I didn't know last month. I got into
      programming early—<strong>QBasic</strong> in fourth grade—and later I was the kid reading decompilation write-ups about bugs in
      the original Pokémon games. (I still think that's a good rabbit hole if you have a weekend). Today I write a lot of
      <strong>TypeScript</strong> and <strong>JavaScript</strong>, but my favorite language to reach for is still <strong>Rust</strong>, even when
      it makes me work for it.
    </p>
  </div>
</Section>

<style lang="postcss">
  b {
    color: var(--color-main);
  }

  :global(.about) {
    gap: 1rem;
  }

  :global(.about-image) {
    min-width: 12rem;
    margin: 1rem;
    max-height: 90vh;
    width: auto;
    border: 5px solid var(--color-white);
    box-shadow: 0 0 15px var(--color-white);
    filter:  brightness(110%) contrast(116%) grayscale(0%) hue-rotate(342deg) invert(0%) opacity(100%) saturate(84%) sepia(0%);
    mix-blend-mode: none;
    transform-style: preserve-3d;
  }

  p {
    max-width: 64rem;
  }

  .leader-text {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .subtext {
    color: var(--color-accent);
    font-size: 1rem;
    line-height: 1.5rem;
    max-width: 64rem;
  }

  @media (min-width: 1024px) { 
    :global(.about) {
      flex-direction: row;
      align-items: center;
    }

    .subtext {
      padding-left: 5rem;
    }
  }
</style>