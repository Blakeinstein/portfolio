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
  <div class="morphing">
    {#each statements as statement, idx}
      <span
        class="word"
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
  font-size: 3rem;
  height: 3ch;
  line-height: 3.5rem;
}

.morphing > .word {
  width: 80vmin;
  position: absolute;
  top: 50%;
  left: 50%;
  /* writing-mode: vertical-rl; */
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