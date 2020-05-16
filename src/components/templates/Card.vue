<template>
  <div class="card">
    <div class="card__header">
      <img :src="imgSrc" :alt="name" class="card__img" />
      <div class="card__name">{{ name }}</div>
      <div class="card__value card__value--color">{{ valueFormated }}</div>
    </div>
    <div class="card__body">
      <button
        class="card__button card__button--sell"
        @click="sell"
        :disabled="quantity > 0 ? false : true"
      >Sell</button>
      <input class="card__input" type="text" :value="quantity" />
      <button class="card__button card__button--buy" @click="buy">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: function() {
    return {
      quantity: 0
    };
  },
  props: {
    name: String,
    imgSrc: String,
    value: Number
  },
  computed: {
    valueFormated() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });
      return formatter.format(this.value).replace(".00", "");
    }
  },
  methods: {
    buy() {
      this.quantity++;
      this.$store.commit("calcFortune", -this.value);
    },
    sell() {
      this.quantity--;
      this.$store.commit("calcFortune", this.value);
    }
  }
};
</script>

<style lang='scss'>
.card {
  padding: 20px 15px;
}

.card__header {
  @include flex(column, flex-start, center);
}

.card__img {
  padding: 15px 10px 10px;
}

.card__name {
  @include font(22, bold);
}

.card__value {
  @include font(20);
}

.card__value--color {
  color: $color__terciary;
}

.card__body {
  @include flex(row, space-between);
  margin-top: 25px;
}

.card__button {
  @include font(16, bold);
  flex-grow: 1;
  padding: 9px 12px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
}

.card__button--buy {
  color: $color__secundary;
  background-color: #05c46b;
}

.card__button--sell {
  color: $color__secundary;
  background-color: #f53b57;
}

.card__button:disabled {
  color: $color__primary;
  background-color: #f1f2f6;
  cursor: auto;
}

.card__input {
  @include font(16);
  text-align: center;
  max-width: 100px;
  margin: 0px 10px;
  padding: 9px 12px;
  border: 1px solid #b2bec3;
  border-radius: 3px;
}
</style>