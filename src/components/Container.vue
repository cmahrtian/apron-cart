<template>
  <div class="hello">
    <BreadcrumbList></BreadcrumbList>
    <ProductDescriptor :product="product">
    </ProductDescriptor>
  </div>
</template>

<script>
import BreadcrumbList from './BreadcrumbList'
import ProductDescriptor from './ProductDescriptor'

export default {
  name: 'Container',
  components: {
    BreadcrumbList,
    ProductDescriptor
  },
  data () {
    return {
      product: {
        name: 'Williams-Sonoma Classic Apron, French Blue',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
