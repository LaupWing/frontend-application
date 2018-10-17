<!-- Dit is de parent component. Het is alleen mogelijk om vanaf hier data mee te geven naar de kleinere components -->
<template>
  <div id="app">
    <app-title></app-title>
    <!-- Hier word een component gebruikt -->
    <!-- Omdat dit een parent element is kan er data worden meegegeven aan de component -->
    <!-- Hieronder word de data test gebind aan een aangemaakte variabele msg -->
    <app-indicator :msg='test' v-on:changeTest="testing($event)"></app-indicator>
    {{test}}
    <br>
    {{test2}}
    <hr>
    <nav>
      <!-- Hier worden de  -->
      <router-link to='/'>Home</router-link>
      <router-link to='/users'>Users</router-link>
      <router-link to='/input'>Users</router-link>
    </nav>
    <hr>
    <!-- Hier worden de verschillende route component geladen -->
    <router-view v-on:changeOk="testout($event)"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 'testen',
      test2: "De echt test"
    }
  },
  methods:{
    testing:function(event){
      this.test = event
    },
    testout:function(event){
      this.test = event
    }

  }
}
</script>

<style>
 nav{

 }
</style>
