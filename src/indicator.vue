<template lang="html">
  <div class="indicator">
    <h1>{{msg}}</h1>
    <button v-on:click="changeThis">{{msg}}</button>
  </div>
</template>

<script>
export default {
  props:['msg'],
  methods:{
     changeThis: function(){
       console.log("test");
       // Hier word een event ge-emit
       // De eerste parameter is hoe je de event noemt
       // Tweede parameter is de data dat je wil meegeven
       this.$emit("changeTest", 'Het werkt')
     }
  }
}
</script>

<style lang="css">
  .indicator{
    background: green;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
  }
</style>
