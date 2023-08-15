<script lang="ts">
	import { onMount } from "svelte";

  let input: HTMLInputElement;

  onMount(() => {
    input.setCustomValidity("Spammer not in the checked file. This incident will be reported.");
  })
</script>

<label class="active:font-semibold relative cursor-pointer checkbox p-2">
  <input type="checkbox" name="confidence" id="noSpam" required bind:this={input}>
  <span class="ml-2">I solemnly swear I am not a troll...</span>
</label>


<style lang="postcss">
  .checkbox {

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
      content: "✦";
      color: white;
      text-align: center;
      line-height: 2em;
      font-size: 1.5em;
      font-weight: bolder;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.1s ease-in;
    }

    &:has(input:checked) {
      @apply font-semibold;
      &:before {
        border-width: 1em;
        box-shadow: 0 0 5px currentColor, 0 0 25px currentColor,
          0 0 50px currentColor, 0 0 100px currentColor;
      }
      &:after {
        opacity: 1;
      }
    }

    > input {
      position: absolute;
      left: -10%;
      translate: -50%;
      bottom: -10%;
      opacity: 0;
    }
  }
</style>