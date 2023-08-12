<div class="container">
  <h2 class="greeting absolute ">Hello from outerspace</h2>
  <div class="ellipses ellipses__outer--thin">
      <div class="ellipses ellipses__orbit"></div>
  </div>
  <div class="ellipses ellipses__outer--thick"></div>
</div>
<!-- </Section> -->

<style lang="postcss">
.container {
  --size: calc(min(130vw, 130vh));
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  margin: 0 auto;
  position: relative;

  .greeting {
    top: calc(var(--size) / 8);
    left: 50%;
    translate: translateX(-50%);

    /* &:after{
      content: '';
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
      display: inline-block;
      background-color: #0C383E;
      position: relative;
      top: -0.65rem;
      left: -5.05rem;
    } */
  }
}
.ellipses {
  border-radius: 50%;
  position: absolute;
  top: 0;
  border-style: solid;
}

.ellipses__outer--thin {
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-color: rgba(9, 56, 62, 0.1);
  animation: ellipsesOrbit 15s ease-in-out infinite;


  &:after {
    content: "";
    background-image: url('https://s29.postimg.org/5h0r4ftkn/ellipses_dial.png');
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    opacity: 0.15;
  }
}

.ellipses__outer--thick {
  width: 99.5%;
  height: 99.5%;
  border-color: #09383E transparent;
  border-width: 2px;
  transform: rotate(-45deg);
  animation: ellipsesRotate 15s ease-in-out infinite;
}

.ellipses__orbit {
  width: 2.5rem;
  height: 2.5rem;
  border-width: 2px;
  border-color: #09383E;
  top: 5rem;
  right: 6.75rem;

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
      transform: rotate(-45deg);
  }

  100% {
      transform: rotate(-405deg);
  }
}

@keyframes ellipsesOrbit {
  0% {
      transform: rotate(0);
  }

  100% {
      transform: rotate(360deg);
  }
}
</style>