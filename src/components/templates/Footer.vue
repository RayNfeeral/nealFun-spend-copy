<template>
  <footer class="footer footer--bg-color">
    <div class="footer__content">
      You may also like
      <div class="footer__options footer__text--bold">
        <Link v-for='option in options' :key='option.name'
          class="footer__link footer__link--undecorated"
          :label='option.label'
          :bgSrc='option.source'
        />
      </div>
      <div class="footer__text--small footer__text--margin-top">
        Copied with ❤️ by
        <a
          class="footer__link"
          target="_blank"
          href="https://www.linkedin.com/in/rafael-nery-machado/"
        >Rafael</a> from
        <a
          class="footer__link"
          target="_blank"
          href="https://twitter.com/nealagarwal"
        >Neal Agarwal</a>
      </div>
      <div class="footer__text--big footer__text--margin-top">
        <a class="footer__link footer__link--undecorated" href="#">Neal.fun</a>
      </div>
    </div>
  </footer>
</template>

<script>
import Link from "./Link";

export default {
  name: "Footer",
  components: {
    Link
  }, 
  computed: {
    options() {
      const allOptions = this.$store.state.options
      const op1 = Math.floor(Math.random() * (allOptions.length));
      const op2 = Math.floor(Math.random() * (allOptions.length));
      return [allOptions[op1], allOptions[op2]]
    }
  }
};
</script>

<style lang='scss'>
.footer {
  @include flex(row, center, center);

  margin-top: 15px;
  padding: 30px 20px 45px;
  text-align: center;
  background-color: $bg-color__primary;
}

.footer__content {
  @include font(22, 500);

  width: $width__general;
}

.footer__text--small {
  font-size: rem(18);
}

.footer__text--big {
  font-size: rem(26);
}

.footer__text--bold {
  font-weight: bold;
}

.footer__text--margin-top {
  margin-top: 20px;
}

.footer__link {
  color: $color__primary;
}

.footer__options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 900px;
  margin: 10px auto 0px;

  @media (max-width: $screen__small) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.footer__link--undecorated {
  text-decoration: none;
}
</style>