<template>
  <div class="descriptor">
    <div>
      <!-- <img src="../assets/product-large-a.jpg" alt=""> -->
      <img :src="displayedImage" alt="main product image">
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

</style>
