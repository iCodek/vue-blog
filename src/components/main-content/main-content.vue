<template>
  <div class="main-content">
    <blog-box v-for="(blog, index) in blogs" :key="index" :blogSummary=blog :index=index ></blog-box>
  </div>
</template>

<script>
import BlogBox from 'base/blog-box/blog-box'
export default {
  components: {
    BlogBox
  },
  props: {},
  data () {
    return {
      blogs: [
        { id: '0',
          title: '博客开发日志0',
          time: '2020年8月25日 14:25:10',
          description: '这是第一篇markdown博客，主要目的呢，是为了熟悉下markdown语法和记录下博客的开发日志，也是第一次边学边做笔记，当初没用现成的wordpress和hexo，就是为了自己实现一下动态博客。开始吧～',
          comments: 80,
          views: 100,
          likes: 8},
        { id: '1',
          title: '博客开发日志1',
          time: '2020年8月25日 14:25:10',
          description: '这是第一篇markdown博客，主要目的呢，是为了熟悉下markdown语法和记录下博客的开发日志，也是第一次边学边做笔记，当初没用现成的wordpress和hexo，就是为了自己实现一下动态博客。开始吧～',
          comments: 80,
          views: 100,
          likes: 8},
        { id: '2',
          title: '博客开发日志2',
          time: '2020年8月25日 14:25:10',
          description: '这是第一篇markdown博客，主要目的呢，是为了熟悉下markdown语法和记录下博客的开发日志，也是第一次边学边做笔记，当初没用现成的wordpress和hexo，就是为了自己实现一下动态博客。开始吧～',
          comments: 80,
          views: 100,
          likes: 8},
        { id: '3',
          title: '博客开发日志3',
          time: '2020年8月25日 14:25:10',
          description: '这是第一篇markdown博客，主要目的呢，是为了熟悉下markdown语法和记录下博客的开发日志，也是第一次边学边做笔记，当初没用现成的wordpress和hexo，就是为了自己实现一下动态博客。开始吧～',
          comments: 80,
          views: 100,
          likes: 8}
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.main-content{
  text-align: center;
  margin-bottom: 160px;
}
</style>
