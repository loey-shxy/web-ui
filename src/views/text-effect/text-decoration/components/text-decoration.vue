<template>
  <el-card header="文字装饰">
    <div class="wrap">
      <div class="group">
        <h2>text-decoration-line</h2>
        <div class="content text-decoration-line">
          <p>overline</p>
          <p>underline</p>
          <p>line-through</p>
          <p>overline underline line-through</p>
        </div>
      </div>
      <div class="group">
        <h2>text-decoration-style</h2>
        <div class="content text-decoration-style">
          <p>solid</p>
          <p>dotted</p>
          <p>dashed</p>
          <p>wavy</p>
          <p>double</p>
        </div>
      </div>
      <div class="group">
        <h2>text-decoration-thickness</h2>
        <div class="content text-decoration-thickness">
          <p>thin</p>
          <p>normal</p>
          <p>thick</p>
        </div>
      </div>
      <div class="group">
        <h2>animation</h2>
        <div class="content">
          <p class="underline jump-down">Hello World</p>
          <p class="underline scroll-left" data-content="Hello WorldHello WorldHello WorldHello World">Hello World</p>
        </div>
      </div>
      <div class="group">
        <h2>text-emphasis</h2>
        <div class="content text-emphasis">
          <p>
              A B C D  
              <span class="keyword">E F</span>
              G H
              <span class="word">I J</span>
              K L
              <span class="emoji">M N</span>
          </p>
        </div>
        <div class="content text-emphasis">
          <p>
              A B C D  
              <span class="keyword">E F</span>
              G H
              <span class="word">I J</span>
              K L
              <span class="emoji">M N</span>
          </p>
        </div>
      </div>
    </div>
  </el-card>

  <el-card class="mt-20" header="使用background实现下划线">
    <div class="wrap background">
      <div class="group">
        <div class="content background-underline">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a>Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam</a>, molestiae laboriosam sit repellendus sed sapiente quidem quod accusantium vero.</p>
        </div>
      </div>
      <div class="group">
        <div class="content background-underline">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a>Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam</a>, molestiae laboriosam sit repellendus sed sapiente quidem quod accusantium vero.</p>
        </div>
      </div>
      <div class="group">
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a class="underline-linear fade-in">Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam</a>, molestiae laboriosam sit repellendus sed sapiente quidem quod accusantium vero.</p>
        </div>
      </div>
      <div class="group">
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a class="underline-linear change-color">Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam</a>, molestiae laboriosam sit repellendus sed sapiente quidem quod accusantium vero.</p>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup name="text-decoration">
</script>
<style lang="scss" scoped>
  /**
  text-decoration-line: 控制用于设置元素中的文本的修饰类型，是在文本下方、上方还是贯穿文本。可以同时设置
  text-decoration-style: solid double dotted dashed wavy
  text-decoration-color: 控制修饰线的颜色
  text-decoration-thickness: 控制修饰线的粗细
  */
  .wrap {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .group {
      flex: 1;
      h2 {
        text-align: center;
      }
      p {
        line-height: 2;
        color: #666;
        font-size: 18px;
      }
      .content {
        margin-top: 20px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    .text-decoration-line {
      p:nth-of-type(1){
        text-decoration-line: overline;
      }
      p:nth-of-type(2){
        text-decoration-line: underline;
      }
      p:nth-of-type(3){
        text-decoration-line: line-through;
      }
      p:nth-of-type(4){
        text-decoration-line: overline underline line-through;
      }
    } 
    .text-decoration-style {
      p {
        text-decoration-line: underline;
      }
      p:nth-of-type(1) {
        text-decoration-style: solid;
      }
      p:nth-of-type(2) {
        text-decoration-style: dotted;
      }
      p:nth-of-type(3) {
        text-decoration-style: dashed;
      }
      p:nth-of-type(4) {
        text-decoration-style: wavy;
      }
      p:nth-of-type(5) {
        text-decoration-style: double;
      }
    }
    .text-decoration-thickness {
      p {
        text-decoration-line: underline;
      }
      p:nth-of-type(1) {
        text-decoration-thickness: 1.5px;
      }
      p:nth-of-type(2) {
        text-decoration-thickness: 2.5px;
      }
      p:nth-of-type(3) {
        text-decoration-thickness: 6px;
      }
    } 
    /**
    text-emphasis-position: [over | under] && [right | left]
    */
    .text-emphasis {
      .keyword {
        text-emphasis: circle #f00;
      }
      .word {
        text-emphasis: 'x' blue;
        text-emphasis-position: over left;
      }
      .emoji {
        text-emphasis: '😋';
        text-emphasis-position: under left;
      }
      &:nth-of-type(2) p {
        writing-mode: vertical-rl;
      }
    }

    &.background {
      .background-underline {
        p {
          color: #666;
          font-size: 18px;
        }
        a {
          background: linear-gradient(90deg, #0cc, #0cc);
          background-size: 100% 3px;
          background-repeat: no-repeat;
          background-position: 100% 100%;
          color: #0cc;
          cursor: pointer;
        }
      }
      .group:nth-of-type(2) {
        .background-underline {
          a {
            background: linear-gradient(90deg, #0cc 50%, transparent 50%, transparent 1px);
            background-size: 10px 2px;
            background-repeat: repeat-x;
            background-position: 100% 100%;
          }
        }
      }
    }
  }
</style>