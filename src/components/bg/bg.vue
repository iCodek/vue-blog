<template>
  <div class="bg" :style="{backgroundPositionY : rate * 100 + '%'}"></div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      rate: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    Scroll (e) {
      let docEle = document.documentElement
      this.rate = 1 - 0.97 * docEle.scrollTop / (docEle.scrollHeight - window.innerHeight)
    }
  },
  created () {},
  mounted () {
    document.addEventListener('scroll', this.Scroll, true)
  }
}
</script>
<style>
body {
  cursor: url('../../assets/cursor.cur'), default;
}
.bg{
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: black;
  background-size: cover;
  background-image: url('../../assets/bg.jpg');
  background-position: center;
  background-position-y: 100%;
}
</style>
