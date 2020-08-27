<template>
  <div class="md-view">
    <mavon-editor ref="md" :ishljs='false' codeStyle='atom-one-dark' v-model="value" :subfield='false' :editable='false' :toolbarsFlag='!_isMobile'  defaultOpen="preview" :navigation='true'/>
  </div>
</template>

<script>
import Blog from 'blogs/blog.md'
import hljs from 'highlight.js'
export default {
  components: {},
  props: {},
  data () {
    return {
      value: Blog
    }
  },
  watch: {},
  computed: {
    _isMobile () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  },
  methods: {},
  created () {},
  mounted () {
    this.$refs.md.$nextTick(() => {
      setTimeout(() => {
        let blocks = this.$el.querySelectorAll('pre code')
        blocks.forEach((block) => hljs.highlightBlock(block))
      }, 1000)
    })
  }
}
</script>

<style  lang="scss" scope>
.md-view{
  width: 100%;
  position: relative;
  background-color: var(--color);
  overflow: hidden;
  margin-bottom: 160px;
}
.markdown-body .highlight pre,
.markdown-body pre {
  background-color: rgba(0, 0, 0, calc(var(--opacity)*2)) !important;
  color: #fff;
}
.v-note-wrapper, .v-note-op, .v-show-content{
  background-color: var(--color) !important;
}
.v-note-navigation-wrapper {
  right: 12px !important;
  bottom: auto !important;
  height: auto !important;
  border: none !important;
  width: 225px !important;
  background-color: rgba(255,255,255,0.4) !important;
  opacity: var(--opacity);
}
.v-show-content {
  height: 1200px !important;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style-border-radius::-webkit-scrollbar, .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style-border-radius::-webkit-scrollbar {
  width: 12px !important;
  background-color: var(--color) !important;
}
</style>
