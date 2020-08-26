<template>
  <div class="m-header">
    <div class="headerbg"></div>
      <div class="loc">
        <progress-bar :min=0 :max=100 v-model = "transparent"></progress-bar>
      </div>
    <search-box></search-box>
  </div>
</template>

<script>
import SearchBox from 'cpnts/search-box/search-box'
import ProgressBar from 'base/progress-bar/progress-bar'
export default {
  components: {
    SearchBox,
    ProgressBar
  },
  props: {},
  data () {
    return {
      transparent: 0
    }
  },
  watch: {
    transparent (newVal) {
      if (newVal >= 0 && newVal <= 100) {
        let root = document.querySelector(':root')
        let value = '--color: ' + 'rgba(255, 255, 255, ' + (1 - newVal / 100) + ');'
        let opacity = '--opacity: ' + (1 - newVal / 100)
        root.setAttribute('style', value + opacity)
      }
    }
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.m-header {
  position: relative;
  .headerbg {
    background-color: #000;
    background-image: url('../../assets/head.jpg');
    background-size: cover;
    background-position: center bottom;
    width: 100%;
    height: 125px;
    opacity: var(--opacity);
  }
  .loc {
    position: absolute;
    bottom: 51px;
    left: -10px;
  }
}
</style>
