<template>
  <div class="board">
    <div class="title">
      {{title}}
    </div>
    <div class="line"></div>
    <slot></slot>
    <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    content: {
      type: String
    },
    title: {
      type: String
    }
  },
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {}
}
</script>
<style  lang="scss" scoped>
.board{
  position: relative;
  // height: 420px;
  height: auto;
  background-color: var(--color);
  margin-bottom: 20px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  user-select: none;
  align-items: center;
  width: 100%;
  .title {
    margin-left: 16px;
    margin-right: 10px;
    color: #000;
    padding-top: 10px;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 5px;
    display: flex;
    height: 32px;
  }
  .line {
    width: 92%;
    height: 2px;
    background-color: #000;
    margin: 0 auto 0px auto;
  }
  p {
    letter-spacing:1px;
    text-indent: 42px;
    margin: 10px;
    margin-top: 6px;
    line-height: 30px;
    font-size: 21px;
  }
}
</style>
