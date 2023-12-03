<script>

	import Section from "$lib/layouts/section.svelte";

</script>
<Section>
  <div class="container greeting-root">
    <div class="greeting">
      <slot />
    </div>
    <div class="ellipses ellipses-outer-thin pointer-events-none">
      <div class="ellipses ellipses-orbit" data-blobity-radius="50"></div>
    </div>
    <div class="ellipses ellipses-outer-thick"></div>
  </div>
</Section>
<!-- </Section> -->

<style lang="postcss">
.container {
  margin: 8vh auto 0;
  --size: min(80vw, 80vh);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: relative;
  overflow: visible;

  .greeting {
    position: absolute;
    z-index: 10;
    top: 10%;
    left: 50%;
    translate: -50% 0;
  }
}

.ellipses {
  border-radius: 50%;
  position: absolute;
  top: 0;
  border-style: solid;
}

.ellipses-outer-thin {
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-color: rgba(40, 33, 81, 0.1);
  animation: ellipsesOrbit 15s ease-in-out infinite;
}

.ellipses-outer-thick {
  width: 100%;
  height: 100%;
  border-color: rgb(40, 33, 81) transparent;
  border-width: 0.5rem;
  animation: ellipsesRotate 15s ease-in-out infinite;
}

.ellipses-orbit {
  width: 2.5rem;
  height: 2.5rem;
  border-width: 2px;
  border-color: rgb(40, 33, 81);
  left: 50%;
  translate: 50% -45%;
  z-index: 1;

  &:before {
    content: '';
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    display: inline-block;
    background-color: rgb(40, 33, 81);
    margin: 0 auto;
    left: 0;
    right: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}

@keyframes ellipsesRotate {
  0% {
    rotate: -45deg;
  }

  100% {
    rotate: -405deg;
  }
}

@keyframes ellipsesOrbit {
  0% {
    rotate: 45deg;
  }

  100% {
    rotate: 405deg;
  }
}

@media (min-width: 1024px) { 
  .container {
    margin-top: 3vh;
  }
}
</style>