<template>
  <div class="right-content">
    <board :title='"公告"' :content='boardContent'></board>
    <board :title='"标签"'><tags></tags></board>
    <board :title='"博客日历"' :content='tip'></board>
  </div>
</template>

<script>
import Tags from 'base/tags/tags'
import Board from 'base/board/board'
export default {
  components: {
    Tags,
    Board
  },
  props: {},
  data () {
    return {
      boardContent: '这个博客暂时还是静态的，后端部分还在学，会马上跟上。源码放在<a href="https://github.com/iCodek/vue-blog">Github</a>上了，如果你觉得做的不错，或者对你有帮助，可以帮忙Star下。',
      tip: `日历组件还在开发中，主要是为了展示发文记录和重要的日子。<br>&emsp;&emsp;尽量每天都写点记录，写够字数了再上传一篇。<br>
            &emsp;&emsp;第一次登录图片是一样的，刷新一下就好了。`
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
.right-content{
  margin: 5px;
  width: 300px;
  @media screen and (max-width:1200px){
    display: none;
  }
}
</style>
