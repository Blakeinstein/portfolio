<script lang="ts">
  import Section from "$lib/layouts/section.svelte";
  import Button from "../elements/atoms/Button.svelte";
  import Title from "../elements/atoms/Title.svelte";
  import Socials from "./socials/index.svelte";
</script>

<footer>
  <Section class="grid-center">
    <div class="footer-container col wf">
      <hr />
      <Title noArrow>Thanks for coming!</Title>
      <h3>Reach out to me via the contact form, shoot me an <a href="mailto:rishi1998+website@gmail.com">email</a> or find me on social media!</h3>
      <Button href="/contact" invert>
        Contact Me!
      </Button>
      <Socials />
      <div class="greetings">
        <div>Handmade and programmed with 🫶🏾</div>
        <div>© 2023 Rishikesh Anand</div>
      </div>
    </div>
  </Section>
</footer>

<style lang="postcss">
  footer {
    background-color: var(--color-white);
    color: var(--color-secondary);
  }

  .footer-container {
    padding: 0;
    gap: 4rem;
  }

  hr {
    background-color: var(--color-bg-primary);
    border-radius: 80%;
    height: 5px;
  }


  .greetings {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
  }

  
  @media (min-width: 1024px) {
    .footer-container {
      padding: 2rem 5rem;
    }

    .greetings {
      flex-direction: row;
    }
  }
</style>