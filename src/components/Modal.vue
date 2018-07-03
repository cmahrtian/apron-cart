<template>
  <div class="modal" v-bind:class="{ displayed: modalDisplaying }">
    <div class="modal-content">
      <span class="close" v-on:click="closeModal">&times;</span>
      <h1>This is your shopping cart!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalDisplaying: Boolean
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
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
</style>
