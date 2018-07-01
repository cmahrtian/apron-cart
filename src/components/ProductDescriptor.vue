<template>
  <div class="descriptor">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <ul>
      <li v-for="(attribute, index) in product.attributes" :key="index">{{ attribute}}</li>
    </ul>
    <h2>${{ product.price }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ProductDescriptor',
  props: {
    product: Object
  }
}
</script>

<style scoped>

</style>
