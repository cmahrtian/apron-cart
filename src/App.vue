<template>
  <div id="app">
    <img src="./assets/WS_logo.png">
    <router-view/>
    <!-- <footer>&#169; 2018 Williams-Sonoma Inc., All Rights Reserved | Terms and Conditions (Updated March 2016) | Privacy Policy | Legal Statement</footer> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
