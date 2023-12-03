<matrix />

<style>
  matrix {
    max-width: 100%;
    overflow-x: hidden;
    position: absolute;
    inset: 0;
    background-size: 40px 40px;
    background-image: radial-gradient(circle,rgba(33, 31, 37, 0.3) 1px,rgba(255, 255, 255, 0) 1px);
    animation: move 4s linear 0s infinite;
    scale: 1.2;
  }

  @keyframes move {
    0% {
      translate: 0;
    }
    100% {
      translate: calc(40px * 1.2) calc(40px * 1.2);
    }
  }
</style>