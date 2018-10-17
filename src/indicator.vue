<template lang="html">
  <div class="indicator">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  props:['msg']
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
