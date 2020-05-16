<template>
  <a class='link' href="#">
      <div class='link__container'>
          <div class="link__background" :style='backgroundImg'></div>
          <div class="link__label">{{ label }}</div>
      </div>
  </a>
</template>

<script>
export default {
    name: 'Link',
    props: {
        label: String,
        bgSrc: String
    },
    computed: {
        backgroundImg() {
            return {
                "background-image": `url(${this.bgSrc})`
            }
        }
    }
}
</script>

<style lang='scss'>
.link__container {
    @include flex(row, center, center);
    position: relative;
    height: 140px;
    //overflow: hidden;
}

.link__background {
    position: absolute;
    z-index: 1;

    height: 100%;
    width: 100%;

    background-position: center center;
    background-repeat: repeat no-repeat;
    background-size: auto 100%;

    &:hover{
        animation: slide 10s linear infinite;
    }
}

.link__label {
    position: absolute;
    z-index: 2;
    padding: 14px 20px;
    background-color: $bg-color__primary;
    border-radius: 5px;
    pointer-events: none;
}

@keyframes slide{
  0%{
    background-position: center center;
  }
  100%{
    background-position: -100px 0;
  }
}
</style>