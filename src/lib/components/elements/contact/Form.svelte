<script>
import Section from "$lib/layouts/section.svelte";
import Button from "../atoms/Button.svelte";
import Title from "../atoms/Title.svelte";

let submitted = false;
</script>
<Section>
  <div class="flex flex-col lg:flex-row gap-12 items-center justify-around mx-16">
    <div class="">
      <Title noArrow>MAKE CONTACT</Title>
      <span class="lg:text-4xl text-2xl">Send me a message, regarding anything!</span>
    </div>
    <div class="flex items-center lg:min-h-screen lg:basis-2/3 w-full">
      {#if submitted}
        <div class="">
          <div class="">
            <h1>Thanks!</h1>
            <h4>I will try to get back as soon as possible!</h4>
          </div>
        </div>
      {:else}
        <form class="flex flex-col gap-4 w-full">
          <div class="grid grid-flow-col gap-2">
            <label>
                Name
                <input type="text" name="name" required placeholder="Your Name">
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Email address"> 
            </label>
          </div>
          <label>
            Subject
            <input type="text" name="subject" placeholder="Choose Subject">
          </label>
          <label for="message">
            Message
            <textarea name="message" placeholder="Start typing here" required></textarea>
          </label>
          <label class="relative cursor-pointer checkbox">
            <input type="checkbox" name="confidence" class="hidden" id="noSpam" required>
            I solemnly swear I am not a troll..
          </label>
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

<style lang="postcss">
  label {
    @apply flex flex-col gap-1;

    &:has(input:focus) {
      @apply font-semibold;
    }

    input[type="text"], input[type="email"], textarea {
      @apply grow w-full bg-transparent border-zinc-800 border-2 p-2 rounded-sm outline-none text-lg transition-all;

      &:focus {
        @apply bg-zinc-100 scale-105;
      }

      &:placeholder {
        @apply text-gray-400;
      }
    }

    textarea {
      @apply h-32;
    }

    &.checkbox {
      display: block;
      margin-left: calc(10% + .5rem);
      margin-bottom: .5rem;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: -10%;
        transform: translate(-50%, -50%);
        visibility: visible;
        width: 2em;
        height: 2em;
        box-sizing: border-box;
      }

      &:before {
        border-radius: 1em;
        border: 3px solid currentColor;
        transition: border 0.1s ease-out;
      }

      &:after {
        content: "✌";
        text-align: center;
        line-height: 2em;
        font-weight: bolder;
        overflow: hidden;
        opacity: 0;
        transition: opacity 0.1s ease-in;
      }

      &:has(input:checked) {
        &:before {
          border-width: 1em;
          box-shadow: 0 0 5px currentColor, 0 0 25px currentColor,
            0 0 50px currentColor, 0 0 100px currentColor;
        }
        &:after {
          opacity: 1;
        }
      }
    }
  }
</style>