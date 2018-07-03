<template>
  <div class="modal" v-bind:class="{ displayed: modalDisplaying }">
    <div class="modal-content">
      <span class="close" v-on:click="closeModal">&times;</span>
      <h3>Thanks for your order! Here's what's in your cart:</h3>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          <img :src="item.image" alt="">
          <div>
            <p>{{ item.productName }}, {{ item.color}}</p>
            <p>${{ item.price }}</p>
          </div>
          <input type="number" v-model="item.quantity">
        </li>
      </ul>
      <h2>Total: ${{ cartTotal }}</h2>
    </div>
  </div>
</template>

<script>
import sumBy from 'lodash.sumby'

export default {
  name: 'Modal',
  props: {
    modalDisplaying: Boolean,
    cart: Array
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  },
  computed: {
    cartTotal () {
      return sumBy(this.cart, 'totalPrice').toFixed(2)
    }
  }
}
</script>

<style scoped>
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }

  .modal.displayed {
    display: block;
  }

  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    margin: 0 auto;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover, .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  li {
    display: grid;
    grid-template-columns: 20% 70% 10%;
    max-width: 80%;
  }

  li input {
    height: 10px;
    width: 50px;
    padding: 8px 5px;
    margin: 6px 0;
    font-size: 14px;
    text-align: center;
  }
</style>
