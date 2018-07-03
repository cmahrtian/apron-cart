<template>
  <div class="descriptor">
    <div>
      <BreadcrumbList :product="product"
        :displayedColor="displayedColor"></BreadcrumbList>
      <img :src="displayedImage" alt="main product image">
      <br>
      <img v-for="(image, index) in product.small_images"
        :key="index"
        :src="image"
        v-on:mouseover="changeSelectedColor(index)"
        alt="thumbnail product image">
    </div>
    <div>
      <h3>{{ product.name }}, {{ displayedColor }}</h3>
      <p>{{ product.description }}</p>
      <ul>
        <li v-for="(attribute, index) in product.attributes"
          :key="index">{{ attribute}}</li>
      </ul>
      <h2>${{ product.price }}</h2>
      <input type="number" placeholder="QTY" step="1">
      <br>
      <button type="button"></button>
      <Collapsible></Collapsible>
      <Collapsible></Collapsible>
      <Collapsible></Collapsible>
    </div>
  </div>
</template>

<script>
import BreadcrumbList from './BreadcrumbList'
import Collapsible from './Collapsible'

export default {
  name: 'ProductDescriptor',
  components: {
    BreadcrumbList,
    Collapsible
  },
  data () {
    return {
      selectedImage: null,
      selectedColor: null,
      product: {
        name: 'Williams-Sonoma Classic Apron',
        description: 'A generously sized apron is a necessity in any kitchen, and ours will brighten yours with lively color. Sewn of thick cotton, it can be personalized or monogrammed with up to nine characters, all the same height, embroidered in your choice of color. An apron of this quality makes a welcome gift for any cook.',
        attributes: [
          'Durable 100% cotton construction.',
          'Adjustable neckband ensures a good fit.',
          'Roomy front pockets hold small tools.',
          'Machine-wash.'
        ],
        price: 19.95,
        colors: [
          'French Blue',
          'Striped Gray',
          'Striped Lime',
          'Striped Red'
        ],
        large_images: [
          require('../assets/product-large-a.jpg'),
          require('../assets/product-large-b.jpg'),
          require('../assets/product-large-c.jpg'),
          require('../assets/product-large-d.jpg')
        ],
        small_images: [
          require('../assets/product-small-a.jpg'),
          require('../assets/product-small-b.jpg'),
          require('../assets/product-small-c.jpg'),
          require('../assets/product-small-d.jpg')
        ]
      }
    }
  },
  computed: {
    displayedImage () {
      return this.selectedImage ? this.selectedImage : this.product.large_images[0]
    },
    displayedColor () {
      return this.selectedColor ? this.selectedColor : this.product.colors[0]
    }
  },
  methods: {
    changeSelectedColor (index) {
      this.selectedImage = this.product.large_images[index]
      this.selectedColor = this.product.colors[index]
    }
  }
}
</script>

<style scoped>
  .descriptor {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2%;
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

  button {
    width: 149px;
    height: 41px;
    margin: 5% 0;
    background: url('../assets/button-add-to-cart.png') no-repeat;
  }

</style>
