<!-- Dit is de parent component. Het is alleen mogelijk om vanaf hier data mee te geven naar de kleinere components -->
<template>
<div id="app">
  <header>
    <app-title></app-title>
    <!-- Hier word een component gebruikt -->
    <!-- Omdat dit een parent element is kan er data worden meegegeven aan de component -->
    <!-- Hieronder word de data test gebind aan een aangemaakte variabele msg -->
    <app-indicator :msg='test' v-on:changeTest="testing($event)"></app-indicator>
    {{test}}
    <br>
    {{test2}}
  </header>
  <nav>
    <!-- Hier worden de  -->
    <div class="nav-wrap">
      <router-link class="nav-item" to='/'>Home</router-link>
      <router-link class="nav-item" to='/users'>Users</router-link>
      <router-link class="nav-item" to='/input'>Users</router-link>
    </div>
    <div class="nav-button">
      <i class="fas fa-sort-up"></i>
    </div>
  </nav>
  <!-- Hier worden de verschillende route component geladen -->
  <router-view v-on:changeOk="testout($event)"></router-view>
</div>
</template>

<script>
const nav = document.querySelector(".nav");
console.log(nav);
const navButton = document.querySelector(".nav-button");

// navButton.addEventListener("click", function(){
//   console.log("test")
// })



export default {
  data() {
    return {
      test: 'testen',
      test2: "De echt test"
    }
  },
  methods: {
    testing: function(event) {
      this.test = event
    },
    testout: function(event) {
      this.test = event
    }

  }
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

header {
  height: 300px;
  background: white;
  border-bottom: solid 5px #E72A75;
}

nav {
  transition: all .2s;
  top: 0;
  height: 100%;
  background: white;
  position: fixed;
  z-index: 100;
  transform: translateX(0);
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 10px 10px 24px -3px rgba(0, 0, 0, 0.32);
}

.nav-wrap {
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.nav-item {
  width: 100%;
  border-bottom: black solid 1px;
  text-decoration: none;
  color: black;
}

.nav-button {
  width: 30px;
  height: 150px;
  background: #E72A75;
  position: absolute;
  right: -30px;
  border-radius: 0 40px 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hide{
  transform: translateX(-200px);
}
i {
  transform: rotate(90deg);
  font-size: 30px;
  color: white;
}

body {
  margin: 0;
  background: #F3F3F3;
}

router-link {
  color: orange;
}
</style>
