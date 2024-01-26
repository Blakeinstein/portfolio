<script lang="ts">
  import emailjs from '@emailjs/browser';

  import Section from "$lib/layouts/section.svelte";
  import Button from "$lib/components/elements/atoms/Button.svelte";
  import Title from "$lib/components/elements/atoms/Title.svelte";
	import type { FormEventHandler } from 'svelte/elements';
	import Oath from './Oath.svelte';
	import Input from './Input.svelte';

  let submitted = false;

  let error = "";

  const sendEmail: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      await emailjs.sendForm("main", "base", e.currentTarget, "user_wird1j6wAcU6lj00aaLo9");
    } catch (e) {
      if (typeof e === "string") {
        error = e.toUpperCase();
      } else if (e instanceof Error) {
        error = e.message;
      } else {
        error = "Somebody set us up the bomb!";
      }
    } finally {
      submitted = true;
    }
  }
</script>
<Section class="grid-center">
  <div class="col inner-contact wf">
    <div class="col">
      <Title noArrow>MAKE CONTACT</Title>
      <span class="info">Send me a message, regarding anything!</span>
    </div>
    <div class="contact-container wf">
      {#if submitted}
        <div class="center">
          {#if error.length > 0}
            <h1>Something went wrong!</h1>
            <h4 class="error">{error}</h4>
          {:else}
            <h1>Thanks!</h1>
            <h4>I will try to get back as soon as possible!</h4>
          {/if}
        </div>
      {:else}
        <form class="col gap wf" on:submit|preventDefault={sendEmail}>
          <div class="row">
            <Input name="Name" placeholder="Your Name" type="text"/>
            <Input name="Email" placeholder="Email address" type="email"/>
          </div>
          <Input name="Subject" placeholder="Choose Subject" type="text"/>
          <Input name="message" placeholder="Start typing here" type="TextArea" />
          <div class="ospace">
            <Oath />
          </div>
          <div>
            <Button buttonType="submit" class="contact-submit">
              <svg
                class="iconl fill"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px"
                viewBox="0 0 1000 1000"
                xml:space="preserve"
                height="2rem"
              >
                <g>
                  <g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g>
              </svg>
              Submit
            </Button>
          </div>
        </form>
      {/if}
    </div>
  </div>
</Section>

<style>

  .inner-contact {
    gap: 3rem;
    align-items: center;
    justify-content: space-around;
    margin: 0 0.5rem;
  }

  .info {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .contact-container {
    display: flex;
    align-items: center;
  }

  .center {
    margin: 0 auto;
    text-align: center;
  }

  .center h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: var(--color-bg-primary);
    margin-bottom: 0.5rem;
  }

  .error {
    color: var(--color-error);
  }

  .row {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
  }

  .ospace {
    margin-bottom: 0.25rem;
    margin-left: 3rem;
  }

  :global(.contact-submit) {
    font-size: 1.125rem;
    font-style: italic;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (min-width: 1024px) { 
    .inner-contact {
      flex-direction: row;
      width: auto;
      margin: 0 4rem;
    }

    .info {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    .contact-container {
      flex-basis: 66.666667%;
    }
  }
</style>