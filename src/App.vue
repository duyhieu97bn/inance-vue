<template>
  <header-compo></header-compo>
  <body-compo-vue></body-compo-vue>
  <footer-compo-vue></footer-compo-vue>
</template>

<script>
import HeaderCompo from './components/HeaderCompo.vue'
import BodyCompoVue from './components/BodyCompo.vue'
import FooterCompoVue from './components/FooterCompo.vue'
export default {
  name: 'App',
  components: {
    HeaderCompo,
    BodyCompoVue,
    FooterCompoVue
  }
}
</script>
<style>
@import "./style/font-awesome.min.css";
</style>
<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>
