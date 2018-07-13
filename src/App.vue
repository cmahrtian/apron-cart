<template>
  <div id="app">
    <img id="logo" src="./assets/WS_logo.png">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 15px auto;
  width: 1024px;
}

#logo {
  display: block;
  margin: 0 auto;
}

Navbar, Footer {
  text-align: center;
}
</style>
