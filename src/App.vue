<template>
  <div id="app">
    <bg></bg>
    <div class="move">
      <m-header></m-header>
      <center></center>
    </div>
  </div>
</template>

<script>
import MHeader from 'cpnts/m-header/m-header'
import bg from 'cpnts/bg/bg'
import center from 'cpnts/center/center'
export default {
  name: 'App',
  components: {
    bg,
    MHeader,
    center
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .move{
    height: auto;
  }
}

</style>
