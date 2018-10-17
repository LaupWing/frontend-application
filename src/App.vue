<!-- Dit is de parent component. Het is alleen mogelijk om vanaf hier data mee te geven naar de kleinere components -->
<template>
  <div id="app">
    <title-component></title-component>

    <!-- Hier word een component gebruikt -->
    <!-- Omdat dit een parent element is kan er data worden meegegeven aan de component -->
    <app-indicator :msg='test'></app-indicator>
    <hr>
    <nav>
      <!-- Hier worden de  -->
      <router-link to='/'>Home</router-link>
      <router-link to='/users'>Users</router-link>
      <router-link to='/input'>Users</router-link>
    </nav>
    <hr>
    <p :testgo="test"></p>
    <!-- Hier worden de verschillende route component geladen -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 'testen'
    }
  },
  methods:{

  }
}
</script>

<style>
 nav{

 }
</style>
