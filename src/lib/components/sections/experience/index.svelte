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
        company="TrueFoundry (CVS Health Account)"
        companyUrl="https://truefoundry.com"
        position="AI Software Forward Deployed Engineer" 
        duration="Jul. 2024 – Present · San Francisco, CA (Remote)"
      >
        <ul>
          <li>Owned end-to-end deployment of multi-modal agentic AI systems for CVS Health pharmacy operations, architecting multi-level LLM platforms with Qwen 3, Llama 4, and Gemini 2.0, reducing model usage costs by 80% and inference times to 33ms via rule-based heuristics and prompt engineering.</li>
          <li>Led client-facing integration of AI agents into production environments, serving as primary stakeholder contact to scope requirements, prototype features with AI-assisted coding, and ensure seamless API handoffs with tech teams, automating millions of monthly prescription refills.</li>
          <li>Designed and deployed autonomous agent-browser framework for appointment scheduling across third-party platforms like Zocdoc, generalizing into company-wide accelerator, handling dynamic tool calls and semantic caching to improve reliability and naturalness.</li>
          <li>Coordinated with platform team to implement observability, deduplication, and human-in-the-loop guardrails for insurance card processing and outbound dialers, stabilizing systems and capturing best practices in internal playbooks.</li>
          <li>Built scalable multi-agent systems for retail IVR, MinuteClinic scheduling, and Health 100 aggregator, migrating to H100 infrastructure and integrating provider APIs with entity extraction prompts for accurate results.</li>
        </ul>
      </WorkItem>
      <WorkItem 
        company="Arizona State University"
        companyUrl="https://www.asu.edu/"
        position="Research Assistant" 
        duration="Mar. 2023 – Jun. 2024 · Tempe, AZ"
      >
        <ul>
          <li>Co-led end-to-end development and deployment of DOJ-sponsored Bone Atlas platform for forensic analysis of 3D bone models, designing GraphQL APIs, spatial annotation tools, and collaborative study explorer to enable researchers to identify abuse indicators.</li>
          <li>Spearheaded multi-modal 3D annotation system integrating frontend visualization with backend data relationships, training data pipelines for future ML models, and migrating databases from Neo4j to MongoDB while maintaining performance.</li>
          <li>Owned infrastructure setup including CI/CD pipelines and automated deployments to lab servers, ensuring smooth integration and scalability for cross-functional teams of forensics experts and investigators.</li>
        </ul>
      </WorkItem>
      <WorkItem 
        company="TrueFoundry"
        companyUrl="https://truefoundry.com"
        position="Software Engineer" 
        duration="May 2021 – Jul. 2022 · Remote"
      >
        <ul>
          <li>Engineered schema-driven development engine using OpenAPI specs to auto-generate frontend and backend code, accelerating developer velocity by 60% and enabling rapid prototyping of ML features.</li>
          <li>Developed ML observability infrastructure for data aggregation and model comparison, allowing customers to iterate 3x faster on experiments with distributed inference frameworks.</li>
          <li>Implemented IaC deployment flows with Terraform and CDK across AWS/GCP, automating multi-cloud model serving and integrating with client environments for production readiness.</li>
        </ul>
      </WorkItem>
    </div>
  </Fade>

<!-- Skills -->
  <Fade>
    <Title size="sm">Skills</Title>
    <div class="col gap">
      <ExpItem skill="AI/ML Frameworks">
        LangChain, LangGraph, PyTorch, vLLM, Ray, LLMs, prompt engineering, agentic AI, RAG, multi-tier LLM routing.
      </ExpItem>
      <ExpItem skill="Languages">
        Python, TypeScript, JavaScript, Rust, C++.
      </ExpItem>
      <ExpItem skill="Backend">
        Node.js, GraphQL, Express, FastAPI, Flask, REST APIs, Spring Boot.
      </ExpItem>
      <ExpItem skill="Frontend">
        React, Svelte, Vue.js, Next.js, Three.js, WebGL.
      </ExpItem>
      <ExpItem skill="Cloud &amp; DevOps">
        AWS, Docker, Kubernetes, Terraform, CDK, CI/CD, GitHub Actions.
      </ExpItem>
      <ExpItem skill="Databases">
        MongoDB, Neo4j, PostgreSQL.
      </ExpItem>
    </div>
  </Fade>

  <Fade>
    <Title size="sm">Education</Title>
    <div class="col gap education">
      <div class="edu-item">
        <h3 class="edu-school">Arizona State University</h3>
        <p class="edu-line">
          <span>Master of Science in Computer Science</span>
          <span class="edu-dates">Aug. 2022 – May 2024</span>
        </p>
        <p class="edu-place">Tempe, AZ</p>
      </div>
      <div class="edu-item">
        <h3 class="edu-school">National Institute of Technology Delhi</h3>
        <p class="edu-line">
          <span>Bachelor of Technology in Computer Science</span>
          <span class="edu-dates">Aug. 2018 – May 2022</span>
        </p>
      </div>
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

  .education {
    max-width: 64rem;
  }

  .edu-item {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-white);
  }

  .edu-item:last-child {
    border-bottom: none;
  }

  .edu-school {
    font-size: 1.5rem;
    line-height: 2rem;
    color: var(--color-main);
    font-weight: 600;
  }

  .edu-line {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
    justify-content: space-between;
    font-style: italic;
    margin-top: 0.25rem;
  }

  .edu-dates {
    font-size: 1.1rem;
    white-space: nowrap;
  }

  .edu-place {
    margin-top: 0.15rem;
    color: var(--color-accent);
    font-size: 0.95rem;
  }
</style>
