<script>
  import Image from '$lib/components/elements/atoms/image/Elastic.svelte';
  import Section from "$lib/layouts/section.svelte";
	import Title from "$lib/components/elements/atoms/Title.svelte";
</script>
<Section class="col about" head>
  <div class="image-container">

  </div>
  <Image src="/dp.png" alt="hero image" class="about-image"/>
  <div class="col gap">
    <Title noArrow>
      Hey all!
    </Title>
    <p class="leader-text">
      I'm <b>Rishikesh "Blaine" Anand</b>, a developer, software engineer and a tech enthusiast.
      I love architecting solutions to real life problems, and bringing them to life in a user-friendly way!
    </p>
    <p class="subtext">
      I've always believed myself to be flexible in the things I can do. I am willing to
      spend the time to research the best solution to a problem, and I take
      immense pride in my ability to learn new tech. My interest in programming had 
      humble beginnings in learning basic <strong>QBasic</strong> in fourth grade, then to researching
      decompilation projects explaining programming mistakes in the original pokemon games.
      (Its a fun little adventure that I recommend to everybody). My favorite programming language
      is <strong>Rust</strong>, no matter how much <strong>TypeScript/JavaScript</strong> I have written in my life. 
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