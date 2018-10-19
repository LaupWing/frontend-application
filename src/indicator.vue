<template lang="html">
  <div class="indicator-wrap">

  <div class="indicator">
    <!-- In de parent element is er een binding gemaakt waardoor msg hier gebruikt kan worden
    In de props word msg gedecladeerd zoadat we dit hier kunnen gebruiken-->
    <h1>{{msg}}</h1>
    <!-- <button v-on:click="changeThis">{{msg}}</button> -->
  </div>
</div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      testVar: "check check"
    }
  },
  methods: {
    changeThis: function() {
      console.log("test");
      // Hier word een event ge-emit
      // De eerste parameter is hoe je de event noemt
      // Tweede parameter is de data dat je wil meegeven
      this.$emit("changeTest", this.testVar)
    }
  }
}
</script>

<style lang="css">
  .indicator{
    /* background: green;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 150px;
    height: 150px;
    border-radius: 50%; */
    margin: 0 auto;
    background-color: #f7f7f7;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#f7f7f7), to(#e7e7e7));
    background-image: -webkit-linear-gradient(top, #f7f7f7, #e7e7e7);
    background-image: -moz-linear-gradient(top, #f7f7f7, #e7e7e7);
    background-image: -ms-linear-gradient(top, #f7f7f7, #e7e7e7);
    background-image: -o-linear-gradient(top, #f7f7f7, #e7e7e7);
    color: #a7a7a7;
    width: 144px;
    height: 144px;
    position: relative;
    text-align: center;
    line-height: 144px;
    border-radius: 50%;
    box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
  }
  /* .indicator-wrap:before{
    content: "";
    display: block;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #fff;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: -1;
  } */
  .indicator:before{
    content: "";
  display: block;
  background: #fff;
  border-top: 2px solid #ddd;
  position: absolute;
  top: -18px;
  left: -18px;
  bottom: -18px;
  right: -18px;
  z-index: -1;
  border-radius: 50%;
  box-shadow: inset 0px 8px 48px #ddd;
  }
</style>
