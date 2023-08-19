<script>
  import Ellipsis from "./Ellipsis.svelte";

</script>

<div class="h-[60vh] grid place-items-center">
  <h1 class="text-8xl lg:text-9xl font-black hero-title px-12 py-2 gradient-text">Hi I am Blaine!</h1>
</div>
<Ellipsis />

<style lang="postcss">
  .hero-title {
    word-spacing: 0.5rem;
  }
  .gradient-text {
    background: url(
      https://media1.giphy.com/media/jaOXKCxtBPLieRLI0c/giphy.gif?cid=ecf05e4751fqcqga4vivc5a9mohakfnsodtsu1oew67k5n1a&ep=v1_gifs_search&rid=giphy.gif&ct=g
    );
    background-position-x: 0%;
    background-position-y: 0%;
    background-clip: border-box;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(40, 33, 81, 0.333);
    background-position: center;
    text-shadow: 0 0 20px #5315bf75;
  }
</style>