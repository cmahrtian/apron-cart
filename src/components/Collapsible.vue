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
    border-width: 1px 0 0;
    background-color: white;
    padding: 18px;
    width: 100%;
    text-align: left;
    outline: none;
    font-size: 15px;
    cursor: pointer;
  }

  .content {
    height: 0;
    margin: 0 !important;
    transform: scaleY(0);
    transition: transform 0.5s ease-out;
  }

  .content.active {
    padding: 0 18px;
    overflow: hidden;
    height: auto;
    transform: scaleY(1);
    transform-origin: top;
  }

  .content p {
    margin: 0 0 1em;
  }
</style>
