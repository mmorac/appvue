<template>
  <img alt="Vue logo" src="https://www.pngkey.com/png/full/137-1377102_happy-dog-companion-dog.png" style="height: 15em;">
  <NavbarComponent></NavbarComponent>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MainComponent from './components/MainComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
