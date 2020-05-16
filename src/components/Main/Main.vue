<template>
  <div class="main">
    <Title
      class="main__title--bg-white"
      hasImg
      imgSrc="https://neal.fun/Spend/billgates.png"
      imgAlt="Bill Gates"
      title="Spend Bill Gates' Money"
    />
    <div class="main__fortune main__fortune--colors">{{fortune}} left</div>
    <div class="main__card-container">
      <Card v-for='card in cardList' :key='card.name' class='main__card--bg' :name="card.name" :imgSrc="card.source" :value="card.value" />
    </div>
  </div>
</template>

<script>
import Title from "../templates/Title";
import Card from "../templates/Card";

export default {
  name: "Main",
  components: {
    Title,
    Card
  },
  computed: {
    fortune() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });
      return formatter.format(this.$store.state.fortune).replace(".00", "");
    },
    cardList() {
      return this.$store.state.cardList;
    }
  }
};
</script>

<style lang='scss'>
.main {
  @include general();
}

.main__title--bg-white {
  background-color: $bg-color__primary;
}

.main__fortune {
  @include font(32, bold);
  padding: 20px;
  margin: 10px 0px;
  text-align: center;

  position: sticky;
  top: 0px;
}

.main__fortune--colors {
  color: $color__secundary;
  background-color: $bg-color__secundary;
}

.main__card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: $screen__medium) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: $screen__small) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.main__card--bg {
  background-color: $bg-color__primary;
}
</style>