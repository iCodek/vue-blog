<template>
  <div class="left-content">
    <user-info></user-info>
    <music-box></music-box>
  </div>
</template>

<script>
import UserInfo from 'cpnts/user-info/user-info'
import MusicBox from 'cpnts/music-box/music-box'
export default {
  components: {
    UserInfo,
    MusicBox
  },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style  lang="scss" scoped>
.left-content{
  margin: calc(var(--margin) * 1px);
  width: 360px;
  @media screen and (max-width:1200px){
    display: none;
  }
}
</style>
