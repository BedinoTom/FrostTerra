<template>
    <App/>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import App from './app.vue';
  
  export default defineComponent({
    name: 'BootstrapFT',
    components: {
      App
    }
  });
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  html, body {
    width:  100%;
    height: 100%;
    margin: 0;
  }
  </style>