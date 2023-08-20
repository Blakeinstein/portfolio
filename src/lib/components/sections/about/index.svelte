<script>
  import Image from '$lib/components/elements/atoms/image/Elastic.svelte';
  import Section from "$lib/layouts/section.svelte";
	import Title from "$lib/components/elements/atoms/Title.svelte";
</script>
<Section class="flex flex-col lg:flex-row justify-around pb-16 lg:items-center gap-4">
  <div class="flex flex-col gap-4">
    <Title noArrow>
      Hey all!
    </Title>
    <p class="text-lg prose max-w-5xl lg:pr-20">
      I'm Rishikesh "Blaine" Anand, a developer, software engineer and a tech enthusiast.
      I love architecting solutions to real life problems, and bringing them to life in a user-friendly way!
    </p>
    <p class="text-slate-500 prose max-w-5xl lg:pl-20">
      I've always believed myself to be flexible in the things I can do. I am willing to
      spend the time to research the best solution to a problem, and I take
      immense pride in my ability to learn new tech. My interest in programming had 
      humble beginnings in learning basic <strong>QBasic</strong> in fourth grade, then to researching
      decompilation projects explaining programming mistakes in the original pokemon games.
      (Its a fun little adventure that I recommend to everybody). My favorite programming language
      is <strong>Rust</strong>, no matter how much <strong>TypeScript/JavaScript</strong> I have written in my life. 
    </p>
  </div>
  <Image src="https://http.dog/static/codes/dogs/medium/301.avif" alt="hero image" class="min-w-[12rem] m-4 grow"/>
</Section>
