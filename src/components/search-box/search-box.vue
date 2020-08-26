<template>
  <div class="search">
    <transition name="fade">
      <div class="search-box" v-show="show" ref="searchBox">
        <input type="text" @focus="addBorder()" @blur="delBorder()">
      </div>
    </transition>
    <svg class="icon" aria-hidden="true" @click='toggleSearchBox()' @mouseenter="showSearchBox()">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      show: false
    }
  },
  watch: {},
  computed: {},
  methods: {
    toggleSearchBox () {
      this.show = !this.show
    },
    showSearchBox () {
      this.show = true
    },
    addBorder () {
      this.$refs.searchBox.style.border = '2px solid green'
    },
    delBorder () {
      this.$refs.searchBox.style.border = ''
    }
  },
  created () {},
  mounted () {}
}
</script>
<style  lang="scss" scoped>
.search{
  position: absolute;
  bottom: 8px;
  right: 4px;
  .fade-enter-active {
    transition: all .4s ease;
  }
  .fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(50px);
    opacity: 0;
  }
  .search-box{
  border-radius: 8px;
  margin-right: 42px;
  height: 40px;
  width:25%;
  min-width: 280px;
  background-color: rgba($color: #caf0cf, $alpha: 0.8);
  text-align: center;
  display:flex;
  box-sizing: border-box;
  input {
    margin: auto;
    width: 94%;
    height: 70%;
    border: none;
    outline:none;
  }
  }
  .icon{
    background-color:whitesmoke;
    bottom: 0;
    border-radius: 50%;
    position: absolute;
    font-size: 36px;
    right: 0;
    transition: border-radius 0.5s ease;
  }
  :hover{
    border-radius: 8px;
  }
}
</style>
