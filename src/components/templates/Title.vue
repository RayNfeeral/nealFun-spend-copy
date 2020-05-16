<template>
  <h1 class="title">
      <img class='title__img' :src='imgSrc' :alt='imgAlt' v-if='hasImg' >
      {{ title }}
  </h1>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: String,
        hasImg: Boolean,
        imgSrc: String,
        imgAlt: String
    }
}
</script>

<style lang='scss'>
.title {
    @include flex(column, space-between, center);
    padding: 30px 20px;
    margin: 0px;
    line-height: 1.6em;
}

.title__img {
    border-radius: 125px;
    margin-bottom: 25px;
}
</style>