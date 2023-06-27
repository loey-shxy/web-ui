<template>
  <div class="p-20">
    <el-card header="文字阴影">
      <div class="wrap">
        <div class="content">
          <div class="text long-shadow">Long Shadow</div>
        </div>
        <div class="content">
          <div class="text deep-shadow">Deep Shadow</div>
        </div>
      </div>
    </el-card>
    <el-card header="内嵌阴影文字效果" class="insert-shadow_wrap mt-20">
      <div class="text insert-shadow">Insert Shadow</div>
    </el-card>
    <el-card header="氖光效果" class="mt-20">
      <div class="bg-black wrap">
        <div class="content">
          <div class="text neon">Neon</div>
        </div>
        <div class="content">
          <div class="text neon-hover">Neon</div>
        </div>
        <div class="content">
          <div class="text text-flicker">
            <span>N</span>
            <span>e</span>
            <span>o</span>
            <span>n</span>
          </div>
        </div>
      </div>
    </el-card>

    <el-card header="渐变文字" class="mt-20">
      <div class="wrap">
        <div class="content">
          <div class="text text-color text-linear">BACKGROUND-CLIP: TEXT</div>
        </div>
        <div class="content">
          <div class="text text-color text-linear huetorate">BACKGROUND-CLIP: TEXT</div>
        </div>
      </div>
    </el-card>

    <el-card header="发光文字" class="mt-20">
      <div class="bg-black wrap">
        <div class="content">
          <div class="text text-shine" data-content="BACKGROUND-CLIP: TEXT">BACKGROUND-CLIP: TEXT</div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup name="text-shadow">
</script>
<style lang="scss" scoped>
  .wrap {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    .content {
      flex: 1;
      max-width: 50%;
    }
  }
  .text {
    font-family: 'Dancing Script', 'Warnes', cursive;
    font-weight: bold;
    font-size: 34px;
    letter-spacing: 2px;
  }
  .long-shadow {
    text-shadow: 
      0px 0px #baaaba,
      1px 1px rgba($color: #baaaba, $alpha: .98),
      2px 2px rgba($color: #baaaba, $alpha: .96),
      3px 3px rgba($color: #baaaba, $alpha: .94),
      4px 4px rgba($color: #baaaba, $alpha: .92),
      5px 5px rgba($color: #baaaba, $alpha: .9),
      6px 6px rgba($color: #baaaba, $alpha: .88),
      7px 7px rgba($color: #baaaba, $alpha: .86),
      8px 8px rgba($color: #baaaba, $alpha: .84),
      9px 9px rgba($color: #baaaba, $alpha: .82),
      10px 10px rgba($color: #baaaba, $alpha: .8),
      11px 11px rgba($color: #baaaba, $alpha: .78),
      12px 12px rgba($color: #baaaba, $alpha: .76),
      13px 13px rgba($color: #baaaba, $alpha: .74),
      14px 14px rgba($color: #baaaba, $alpha: .72),
      15px 15px rgba($color: #baaaba, $alpha: .7),
      16px 16px rgba($color: #baaaba, $alpha: .68),
      17px 17px rgba($color: #baaaba, $alpha: .66),
      18px 18px rgba($color: #baaaba, $alpha: 64),
      19px 19px rgba($color: #baaaba, $alpha: 62),
      20px 20px rgba($color: #baaaba, $alpha: 6),
  }
  .deep-shadow {
    text-shadow: 0 -1px 0 #ffffff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212;
  }
  .insert-shadow_wrap {
    .insert-shadow {
      background-color: #2d2d2d;
      color: #202020;
      letter-spacing: .1em;
      margin: -20px;
      padding: 40px;
      text-shadow: -1px -1px 1px #111111, 2px 2px 1px #363636;
    }
  }
  .bg-black {
    background-color: #000;
    margin: -20px;
    padding: 40px;
  }
</style>