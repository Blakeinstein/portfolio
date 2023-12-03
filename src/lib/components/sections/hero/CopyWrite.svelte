<script lang="ts">
  let statements = [
    "A Full Stack Developer.",
    "A DevOps expert.",
    "A software developer.",
    "A tech enthusiast.",
    "A problem solver.",
    "A team player.",
    "A leader.",
    "Kenough.",
  ];

  const speed = 24;

  const delay = (idx: number) => (speed / (statements.length + 1)) * (idx) - speed;
</script>
<div class="contents">
  I am
  <div class="morphing">
    {#each statements as statement, idx}
      <span
        class="word gradient-text"
        style={`
          animation-duration: ${speed}s;
          animation-delay: ${delay(idx)}s;
        `}
      >
        {statement}
      </span>
    {/each}
  </div>
</div>

<style>

.morphing {
  position: relative;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  text-align: center;
  font-weight: 600;
  height: 5ch;
  min-width: 45vw;
}

.morphing > .word {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  animation-name: word;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;
}

@keyframes word {
  0%, 5%, 100% { filter: blur(0px); opacity: 1; }        
  20%, 80% { filter: blur(1em); opacity: 0; }        
}
</style>