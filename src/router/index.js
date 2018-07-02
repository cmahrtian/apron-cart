import Vue from 'vue'
import Router from 'vue-router'
// import Container from '@/components/Container'
import ProductDescriptor from '@/components/ProductDescriptor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductDescriptor',
      component: ProductDescriptor
    }
  ]
})
