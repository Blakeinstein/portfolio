<script>
  import Button from "$lib/components/elements/atoms/Button.svelte";
  import NavMenu from "$lib/components/navbar/NavMenu.svelte";
  import Section from "$lib/layouts/section.svelte";
  import Icon from "@iconify/svelte";
  import SkillsGrid from "./SkillsGrid.svelte";
  import PortfolioCircle from "./PortfolioCircle.svelte";
  import Avatar from "./Avatar.svelte";

</script>
<Section class="col gap plaque" head>
  <div class="col name-card">
    <span class="p-icon"><Icon icon="tabler:atom-2-filled"/> Portfolio</span>
    <div class="avatar">
      <Avatar />
    </div>
    <div class="name-holder">
      <div class="name col">
        <span>Im,</span>
        <span>Rishikesh</span>
        <span>Anand</span>
      </div>
      <PortfolioCircle />
    </div>
    <div class="action">
      <Button href="/about" noBorder>
        <Icon icon="fa6-solid:person-rays" class="icon" />
        More about me
      </Button>
    </div>
  </div>
  <div class="col gap info-card align-center">
    <div>
      I am
      <SkillsGrid />
    </div>
    <NavMenu />
    <div class="content">
      <a href="https://www.youtube.com/watch?v=S8s9uzPIqQ4" target="_blank" data-blobity-tooltip="Yuki installs gentoo (PS I do not share the views on the video)" class="inverted">
        <picture>
          <img src="/anim.webp" alt="fancy gif" height="100%" width="100%"/>
        </picture>
      </a>
      <a
        style="background-color: #a9dad7"
        class="inverted"
        href="https://www.linkedin.com/in/blakeinstein/overlay/1635555032529/single-media-viewer/?profileId=ACoAABp1dWoBSssauXlzfQVH3dgs4E2drMNqbmE"
        target="_blank"
        data-blobity-tooltip="Resume"
      >
        <span class="col align-center">
          <h2>5</h2>
          <p>Years of experience</p>
        </span>
      </a>
      <a style="background-color: #7d63a8" href="/projects">
        <span>
          <h2>10+</h2>
          <p>Projects</p>
        </span>
      </a>
      <div style="background-color: #e15f5d" class="inverted">
        <h3>DevOps</h3>
        <p class="icon-gallery">
          <Icon icon="logos:docker-icon" class="icon" data-blobity-tooltip="Docker" />
          <Icon icon="logos:kubernetes" class="icon" data-blobity-tooltip="Kubernetes" />
          <Icon icon="skill-icons:githubactions-dark" class="icon" data-blobity-tooltip="Github Actions"/>
          <Icon icon="logos:aws" class="icon" data-blobity-tooltip="AWS" />
          <Icon icon="logos:terraform-icon" class="icon" data-blobity-tooltip="Terraform" />
          <Icon icon="logos:pulumi-icon" class="icon" data-blobity-tooltip="Pulumi" />
        </p>
      </div>
      <div style="background-color: #fed7cd" class="inverted" >
        <h3>Full Stack</h3>
        <p class="icon-gallery">
          <Icon icon="logos:nodejs" class="icon" data-blobity-tooltip="Node.js" />
          <Icon icon="logos:deno" class="icon" data-blobity-tooltip="Deno" />
          <Icon icon="logos:react" class="icon" data-blobity-tooltip="React" />
          <Icon icon="logos:vue" class="icon" data-blobity-tooltip="Vue" />
          <Icon icon="logos:svelte-icon" class="icon" data-blobity-tooltip="Svelte" />
          <Icon icon="logos:python" class="icon" data-blobity-tooltip="Python" />
          <Icon icon="skill-icons:rust" class="icon" data-blobity-tooltip="Rust" />
          <Icon icon="devicon:elixir" class="icon" data-blobity-tooltip="Elixir" />
      </div>
      <div style="background-color: #ffc266" class="inverted">
        <h3>Tools</h3>
        <p class="icon-gallery">
          <Icon icon="logos:jira" class="icon" data-blobity-tooltip="Jira" />
          <Icon icon="logos:confluence" class="icon" data-blobity-tooltip="Confluence" />
          <Icon icon="logos:trello" class="icon" data-blobity-tooltip="Trello" />
          <Icon icon="devicon:archlinux" class="icon" data-blobity-tooltip="Arch Linux" />
          <Icon icon="logos:figma" class="icon" data-blobity-tooltip="Figma" />
          <Icon icon="devicon:git" class="icon" data-blobity-tooltip="Git Source Control Management" />
        </p>
      </div>
    </div>
  </div>
</Section>

<style lang="postcss">
.name-card {
  background-color: var(--color-main);
  color: var(--color-bg-primary);
  justify-content: space-between;
  position: relative;

  .p-icon {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    top: 0rem;
    left: 0rem;
    padding: 0.5rem;
    background-color: var(--color-bg-primary);
    color: var(--color-main);
  }

  .p-icon::after {
    content: "";
    margin: 0 auto;
    position: absolute;
    left: 100%;
    top: 0;
    bottom: 0;
    width: 2rem;
    background-color: inherit;
    border-style: solid;
    border-width: 0 0 2.5rem 1.75rem;
    border-color: transparent transparent var(--color-main) transparent;
  }

  .avatar {
    margin-top: 4rem;
    margin-right: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  .name-holder {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .name {
    flex-basis: 75%;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 700;
    gap:0;
    > span:first-child {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  .action {
    background-color: var(--color-bg-secondary);
    display: flex;
    justify-content: center;
    padding: 1rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
}

.info-card {
  flex-grow: 1;
  padding-top: 2rem;
  
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    flex-grow: 1;
    width: 100%;

    > div, > a {
      background-color: var(--color-bg-secondary);
      color: white;
      border: 1px solid var(--color-white);
      display: flex;
      padding: 0.5rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      p {
        text-align: center;
      }
      h3 {
        font-weight: 200;
      }

      > span {
        justify-content: center;
        > h2 {
          font-size: 3rem;
          line-height: 3rem;
        }
      }

      > p {
        flex-grow: 1;
      }
      &.inverted {
        color: var(--color-bg-primary);
      }
    }

    > a {
      text-decoration: none;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 0.25rem;
        right: 0.25rem;
        width: 1rem;
        height: 1rem;
        border-width: 2px 2px 0 0;
        border-style: solid;
        border-color: currentColor;
      }
    }

    >a:first-of-type {
      grid-area: 1 / 1 / 3 / 3;
      padding: 0;
      img {
        object-fit: cover;
        min-width: 100%;
        min-height: 100%;
        border-radius: 0;
      }
    }

  }
}

.icon-gallery {
  display: flex;
  flex-wrap: wrap;
  padding: 0.25rem;
  justify-content: center;
  align-content: center;
  gap: 0.5rem;
  > :global(.icon) {
    filter: drop-shadow(0px 0px 1px currentColor);
  }
}

@media (min-width: 1024px) { 
  :global(.plaque) {
    flex-direction: row;
    padding: 5rem !important;
  }

  .name-card {
    min-width: 35vw;

    .name-holder {
      padding: 1rem 3rem;
    }
  
    .name {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
  }

  .content {
    > div {
      > h3 {
        font-size: 2rem;
      }
    }
    .icon-gallery {
      gap: 1rem;
      max-width: 60%;
      align-self: center;

      > :global(.icon) {
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }
}
</style>