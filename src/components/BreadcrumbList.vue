<template>
  <ul class="breadcrumbs">
    <li>Home</li>
    <li>Housekeeping</li>
    <li>Aprons</li>
    <li>Adult Aprons</li>
    <li>{{ product.name }}, {{ displayedColor }}</li>
  </ul>
</template>

<script>
export default {
  name: 'BreadcrumbList',
  props: {
    displayedColor: String,
    product: Object
  }
}
</script>

<style scoped>
ul {
  padding-left: 0;
}

ul li {
  display: inline;
  color: gray;
  font-size: 12px;
}

ul li:nth-child(n+2):before {
  content: ">";
  margin: 0 5px;
  color: gray;
}

ul li:nth-last-child(1) {
  color: black;
}

</style>
