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
<Section>
  <div class="flex flex-col lg:flex-row gap-12 items-center justify-around mx-16">
    <div class="flex flex-col items-center">
      <Title noArrow>MAKE CONTACT</Title>
      <span class="lg:text-4xl text-2xl">Send me a message, regarding anything!</span>
    </div>
    <div class="flex items-center lg:min-h-screen lg:basis-2/3 w-full">
      {#if submitted}
        <div class="mx-auto text-center">
          {#if error.length > 0}
            <h1 class="text-4xl font-black mb-2">Something went wrong!</h1>
            <h4 class="text-red-400">{error}</h4>
          {:else}
            <h1 class="text-4xl font-black mb-2">Thanks!</h1>
            <h4>I will try to get back as soon as possible!</h4>
          {/if}
        </div>
      {:else}
        <form class="flex flex-col gap-4 w-full" on:submit|preventDefault={sendEmail}>
          <div class="grid grid-flow-col gap-2">
            <Input name="Name" placeholder="Your Name" type="text"/>
            <Input name="Email" placeholder="Email address" type="email"/>
          </div>
          <Input name="Subject" placeholder="Choose Subject" type="text"/>
          <Input name="message" placeholder="Start typing here" type="TextArea" />
          <Oath />
          <div>
            <Button buttonType="submit" class="text-lg italic tracking-widest uppercase">
              <svg
                slot="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px"
                viewBox="0 0 1000 1000"
                xml:space="preserve"
                class="h-8 fill-current"
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

