<template>
  <div class="navbar">
    <ul>
      <li>Cookware</li>
      <li>Cooks' Tools</li>
      <li>Cutlery</li>
      <li>Electrics</li>
      <li>Bakeware</li>
      <li>Food</li>
      <li>Tabletop & Bar</li>
      <li>Homekeeping</li>
      <li>Outdoor</li>
      <li>Sale</li>
      <li>Williams Sonoma Home</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar ul {
  list-style-type: none;
  margin: 1% 0;
  padding: 4px 0;
  overflow: hidden;
  background: #2d2d2d;
  text-align: center;
}
li {
  display: inline;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  padding: 9px 10px;
  text-decoration: none;
}

li:nth-child(11) {
  border-left: 1px solid;
}

li:hover {
  background-color: gray;
  cursor: pointer;
}
</style>
