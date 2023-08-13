<div class="container">
  <h2 class="greeting absolute ">Hello from outerspace</h2>
  <div class="ellipses ellipses-outer-thin">
    <div class="ellipses ellipses-orbit"></div>
  </div>
  <div class="ellipses ellipses-outer-thick"></div>
</div>
<!-- </Section> -->

<style lang="postcss">
.container {
  --size: calc(min(80vw, 80vh));
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: relative;
  margin: 0 auto;

  .greeting {
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
  border-color: rgba(9, 56, 62, 0.1);
  animation: ellipsesOrbit 15s ease-in-out infinite;
}

.ellipses-outer-thick {
  width: 100%;
  height: 100%;
  border-color: #09383E transparent;
  border-width: 0.5rem;
  animation: ellipsesRotate 15s ease-in-out infinite;
}

.ellipses-orbit {
  width: 2.5rem;
  height: 2.5rem;
  border-width: 2px;
  border-color: #09383E;
  left: 50%;
  translate: 50% -50%;
  z-index: 1;

  &:before {
    content: '';
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    display: inline-block;
    background-color: #09383E;
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
</style>