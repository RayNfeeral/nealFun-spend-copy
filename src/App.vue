<template>
  <div id="app">
    <Header title="Neal.fun" />
    <Content />
    <div>
      <Adsense />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/templates/Header";
import Content from "./components/templates/Content";
import Adsense from "./components/templates/Adsense";
import Footer from "./components/templates/Footer";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Adsense,
    Footer
  }
};
</script>

<style lang='scss'>
body,
html {
  font-family: $font-family__general;
  background-color: $body__bg-color;
  padding: 0;
  margin: 0;
  touch-action: manipulation;
}
</style>
