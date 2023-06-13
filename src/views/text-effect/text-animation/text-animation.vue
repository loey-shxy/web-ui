<template>
    <div class="container">
      <div class="text text-color scroll-change">灵动的 iPhone 新玩法，迎面而来。重大的安全新功能，为拯救生命而设计。
        创新的 4800 万像素主摄，让细节纤毫毕现。更有 iPhone 芯片中的速度之王，
        为一切提供强大原动力。  
      </div>

      <div class="text">灵动的 iPhone 新玩法，迎面而来。重大的安全新功能，为拯救生命而设计。
        创新的 4800 万像素主摄，让细节纤毫毕现。更有 iPhone 芯片中的速度之王，
        为一切提供强大原动力。  
        <div class="bg"></div>
      </div>

      <div class="text">
        <p>灵动的 iPhone 新玩法，迎面而来。重大的安全新功能，为拯救生命而设计。
          创新的 4800 万像素主摄，让细节纤毫毕现。更有 iPhone 芯片中的速度之王，
          为一切提供强大原动力。  </p>
      </div>
    </div>
</template>
<script setup lang="ts" name="text-animation">
</script>
<style lang="scss" scoped>
  .container {
    height: 100%;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    box-sizing: border-box;
    .text {
      font-size: 22px;
      width: 500px;
    }
    .text:nth-child(2) {
      color: #fff;
      margin-top: 50px;
      background-color: #000;
      position: relative;
      overflow: hidden;
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 400%;
        background: linear-gradient(-3deg, #000, #000 25%, #ffb6ff 30%, #ffb6ff, #b344ff, #b344ff 70%, #000 75%, #000);
        /**
        混合模式，只有白色文字部分会显示出上层.bg的颜色，而黑色背景部分与上层背景叠加的颜色仍旧为黑色
        */
        mix-blend-mode: darken;
        animation: textScroll2 6s infinite linear alternate;
      }
    }
    .text:nth-child(3) {
      margin-top: 50px;
      overflow: hidden;
      p {
        color: transparent;
        background: linear-gradient(-4deg, #b344ff, #ffb6ff 25%, #ffb6ff, #b344ff, #b344ff 75%, #ffb6ff);
        -webkit-background-clip: text;
        background-size: 100% 100%;
        animation: textScroll3 10s infinite linear;
      }
    }
  }

  @keyframes textScroll1 {
    100% {
      background-position: center 100%;
    }
  }

  @keyframes textScroll2 {
    100% {
      transform: translate(0, -75%);
    }
  }

  @keyframes textScroll3 {
    0% {
      transform: translateY(100px);
    }
    100% {
      transform: translateY(-100%);
    }
  }
</style>