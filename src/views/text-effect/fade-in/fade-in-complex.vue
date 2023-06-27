<template>
  <div class="wrap">
    <div class=" text-fadeIn complex">
      <div class="button">Start</div>
      <div class="complex-wrap"></div>
      <p><span data-text="Lorem">Lorem</span> <span data-text="ipsum">ipsum</span> <span data-text="dolor">dolor</span> <span data-text="sit">sit</span> <span data-text="amet">amet</span> <span data-text="consectetur">consectetur</span> <span data-text="adipisicing">adipisicing</span> <span data-text="elit.">elit.</span> <span data-text="Mollitia">Mollitia</span> <span data-text="nostrum">nostrum</span> <span data-text="placeat">placeat</span> <span data-text="consequatur">consequatur</span> <span data-text="deserunt">deserunt</span> <span data-text="velit">velit</span> <span data-text="ducimus">ducimus</span> <span data-text="possimus">possimus</span> <span data-text="commodi">commodi</span> <span data-text="temporibus">temporibus</span> <span data-text="debitis">debitis</span> <span data-text="quam.">quam.</span></p>
    </div>
  </div>
</template>
<script lang="ts" setup name="fade-in-complex">
</script>
<style lang="scss" scoped>
  .wrap {
    display: flex;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .complex {
    height: 100%;
    width: 100%;
  }
  p {
    margin: 100px auto;
    width: 500px;
    font-size: 24px;
    line-height: 1.5;
  }
</style>