<template>
  <div class="collapsible">
    <button class="expander"
      v-on:click="toggleCollapsible">
      {{ collapsibleTitle }}
    </button>
    <div class="content"
      v-bind:class="{ active: expanded }">
      <p>This section is expanded. This section can be collapsed by clicking on the "Expanded" text.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapsible',
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    collapsibleTitle () {
      return this.expanded ? '\u25BC EXPANDED' : '\u25B6 COLLAPSED'
    }
  },
  methods: {
    toggleCollapsible () {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style scoped>
  .expander {
    border-width: 1px 0;
    background-color: white;
    padding: 18px;
    width: 100%;
    text-align: left;
    outline: none;
    font-size: 15px;
    cursor: pointer;
  }

  .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: white;
  }

  .active {
    display: block;
    transition: max-height 1s ease-out;
  }
</style>
