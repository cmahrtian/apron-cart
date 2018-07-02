<template>
  <div class="descriptor">
    <div>
      <img :src="displayedImage" alt="main product image">
      <br>
      <img v-for="(image, index) in product.small_images"
        :key="index"
        :src="image"
        v-on:mouseover="changeDisplayedImage(index)"
        alt="thumbnail product image">
    </div>
    <div>
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <ul>
        <li v-for="(attribute, index) in product.attributes"
          :key="index">{{ attribute}}</li>
      </ul>
      <h2>${{ product.price }}</h2>
      <input type="number" placeholder="QTY" step="1">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayedImage: require('../assets/product-large-a.jpg')
    }
  },
  name: 'ProductDescriptor',
  props: {
    product: Object
  },
  methods: {
    changeDisplayedImage (index) {
      this.displayedImage = this.product.large_images[index]
    }
  }
}
</script>

<style scoped>
  .descriptor {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1%;
  }

  img:nth-child(n+2):hover {
    border: 2px solid black;
  }

  img:nth-child(n+3) {
    margin-left: 5%;
  }

  input {
    width: 50px;
    padding: 8px 5px;
    margin: 6px 0;
    font-size: 14px;
    text-align: center;
  }

</style>
