<div>
  <img src="/avatar.svg" width="100%" height="100%" alt="Blaine's Avatar" />
</div>

<style>
  div {
    width: 300px;
    height: 300px;
    position: relative;
  }
  
  img {
    z-index: 5;
    scale: -1.25 1.25;
    border-radius: 50%;
    translate: 0 -10%;
  }
  

  div::before, div::after, img {
    content: "";
    position: absolute;
  }

  div::before {
    z-index: 2;
    inset: 0;
    border-radius: 50%;
    border: 5px solid white;
  }

  div::after {
    inset: 10%;
    z-index: 1;
    border-radius: 50%;
    background-color: var(--color-bg-primary);
  }
</style>