<template>
  <div class="md-view">
    <mavon-editor ref="md" v-model="value" :subfield='false' :editable='false' :toolbarsFlag='true' :ishljs='true' defaultOpen="preview" :navigation='true'/>
  </div>
</template>

<script>
import Blog from 'blogs/博客主页开发日志.md'
export default {
  components: {},
  props: {},
  data () {
    return {
      value: Blog
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {
    let h = document.body.clientHeight
    // console.log(this.$route.params.blogId)
    this.$refs.md.$refs.navigationContent.parentNode.style.backgroundColor = 'rgba(255,255,255,0.6)'
    this.$refs.md.$refs.navigationContent.parentNode.style.bottom = 'auto'
    this.$refs.md.$refs.navigationContent.parentNode.style.height = 'auto'
    this.$refs.md.$refs.vShowContent.style.height = h + 'px'
  }
}
</script>
<style  lang="scss" scoped>
.md-view{
  width: 100%;
  position: relative;
  background-color: white;
  overflow: hidden;
  margin-bottom: 160px;
}
</style>
