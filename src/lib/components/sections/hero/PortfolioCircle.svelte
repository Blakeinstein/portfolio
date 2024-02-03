<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <path id="circle" d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            ">
    </path>
  </defs>
  <circle cx="100" cy="100" r="90"/>
  <circle cx="100" cy="100" r="20" fill="white"/>
  <text fill="white">
    <textPath xlink:href="#circle" class="text">
      · · · <tspan class="blue">2024</tspan> · · · My Online Portfolio
    </textPath>
  </text>
</svg>

<style>
svg {
  animation-name: rotate-circle;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  margin: 0.5rem 0;
  width: 18vh;
  height: 18vh;
}
.blue {
  fill: var(--color-main);
}
.text {
  font-weight: 600;
  letter-spacing: 1px;
  word-spacing: 8px;
  text-transform: uppercase;
  font-size: 20px;
}

@keyframes rotate-circle {
  to {
    transform: rotate(1turn);
  }
}
</style>