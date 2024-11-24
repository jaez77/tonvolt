<div class="quus"></div>

<svelte:head>
  <style>
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: content-box;
    }

    html,
    body {
      width: 100vw;
      height: 100vh;
      background: #0d0722;
    }

    body {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      color: #fff;
      font-family: "Exo 2";
      font-size: 24px;
      animation: fadeIn 500ms reverse;
    }
  </style>
</svelte:head>

<style>
  .quus {
    background-image: linear-gradient(120deg, #34e0f0 0%, #b400ff 100%);
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    width: 150px;
    height: 144px;
    animation: morph 3s linear infinite;
    transform-style: preserve-3d;
    outline: 1px solid transparent;
    will-change: border-radius;
  }

  .quus:before,
  .quus:after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    box-shadow: 5px 5px 89px rgba(0, 102, 255, 0.21);
    will-change: border-radius, transform, opacity;
    animation-delay: 200ms;
    background-image: linear-gradient(
      120deg,
      rgba(0, 67, 255, 0.55) 0%,
      rgba(0, 103, 255, 0.89) 100%
    );
  }

  .quus:before {
    animation: morph 10s linear infinite;
    opacity: 0.21;
    animation-duration: 1.5s;
  }

  .quus:after {
    animation: morph 10s linear infinite;
    animation-delay: 400ms;
    opacity: 0.89;
    content: "Tonvolt";
    line-height: 120px;
    text-indent: -21px;
  }

  @keyframes morph {
    0%,
    100% {
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
    }
    50% {
      opacity: 0.89;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
      transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
    }
  }

  @keyframes fadeIn {
    100% {
      transform: scale(1.03);
      opacity: 0;
    }
  }
</style>
