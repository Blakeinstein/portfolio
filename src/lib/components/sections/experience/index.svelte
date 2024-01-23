<script lang="ts">
import Fade from "$lib/animations/fade.svelte";
import Title from "$lib/components/elements/atoms/Title.svelte";
import Section from "$lib/layouts/section.svelte";
import ExpItem from "./ExpItem.svelte";
	import WorkItem from "./WorkItem.svelte";
</script>

<!-- Work Experience -->
<Section class="col lgap">
  <Fade>
    <Title size="sm">Work Experience</Title>
    <div class="col gap"> 
      <WorkItem 
        company="Arizona State University"
        companyUrl="https://entrepreneurship.asu.edu/programs/edson-entrepreneurship-innovation-at-healab/"
        position="Research Aide" 
        duration="Mar 2023 - present"
      >
        <em>Built a social media platform for the ASU Heal lab, to be used by death investigators to collaborate on cases.</em>
        <br>
        <span>
          <strong>Tech used:</strong> VueJs, TypeScript, SpringBoot, Java, GraphQl, Neo4j and more.
        </span>
      </WorkItem>
      <WorkItem 
        company="TrueFoundry"
        companyUrl="https://truefoundry.com"
        position="Software Developer" 
        duration="May 2021 - July 2022"
      >
        <em>Worked on a platform to enable ML engineers to iterate faster, simplifying their path to productionizing their models.</em>
        <br>
        <span>
          <strong>Tech used:</strong> React, TypeScript, NextJS, OpenAPI, Docker, Kubernetes, Terraform, CDKTF and more.
        </span>
      </WorkItem>
    </div>
  </Fade>

<!-- Programming languages -->
  <Fade>
    <Title size="sm">Programming Languages</Title>
    <div class="col gap">
      <ExpItem skill="Web Frameworks" note="React, Vue, Svelte, Angular, Solid, Alpine...." years={5}>
        I have had my roots in web development, and take pride in my expertise in the domain. I am very flexible with the frameworks I use, and I am always looking to learn more. I have used React, Vue, Svelte, Angular, Solid, Alpine, and more. I am currently using Svelte for my personal projects, and I have professional experience in writing production grade React and VueJs (both 2 and 3).
      </ExpItem>
      <ExpItem skill="TypeScript / JavaScript" years={5}>
        I've used TypeScript and JavaScript for everything from web development to native software. I've used it in both hobby and professional settings. I honestly don't know how many lines of code I've written in this language. I love it, but I'm also looking to branch out. 
        <span class="text-zinc-800">I prefer TypeScript over JavaScript.</span>
      </ExpItem>
      <ExpItem skill="Rust" years={3}>
        I've used rust for everything from native software to web servers, but only in hobby projects. I've never used it in a professional setting but I would love to.
      </ExpItem> 
      <ExpItem skill="C++"years={2}>
        I started using C++ in college, and my primary use-case for it has always been competitive programming. I'd much rather prefer to use Rust for actual software.
      </ExpItem>
      <ExpItem skill="Java" years={2}>
        My primary uses for Java was an OO programming course in college, and the entirety of my Master's degree. I have professional experience in working with Spring and Spring Boot.
      </ExpItem>
    </div>
  </Fade>
</Section>

<style>
  .col {
    padding: 0 1rem;
  }

  :global(.lgap) {
    gap: 2rem;
  }

  span {
    color: var(--color-secondary);
  }
</style>