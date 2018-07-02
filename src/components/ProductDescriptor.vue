<template>
  <div class="descriptor">
    <div>
      <img :src="displayedImage" alt="main product image">
      <br>
      <img v-for="(image, index) in product.small_images"
        :key="index"
        :src="image"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDescriptor',
  props: {
    product: Object,
    displayedImage: String
  }
}
</script>

<style scoped>
  .descriptor {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1%;
  }

  img:nth-child(n+3) {
    margin-left: 4%;
  }

</style>
