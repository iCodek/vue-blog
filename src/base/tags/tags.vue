<template>
  <div  @click="shuffle">
    <transition-group name="cell" tag="div" class="tags">
      <div class="tag" v-for="(tag, index) in tags" :key="tag.number" :style="{backgroundColor : color[index]}">
        {{tag.name+' ('+tag.number+')'}}
      </div>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash/lodash'
import {rainbowColor} from 'common/js/util'
export default {
  components: {},
  props: {},
  data () {
    return {
      tags: [{'name': 'html', 'number': 39, 'link': '#'},
        {'name': 'css', 'number': 29, 'link': '#'},
        {'name': 'js', 'number': 10, 'link': '#'},
        {'name': 'vue', 'number': 8, 'link': '#'},
        {'name': 'python', 'number': 5, 'link': '#'},
        {'name': 'java', 'number': 6, 'link': '#'},
        {'name': 'spring', 'number': 1, 'link': '#'},
        {'name': 'c#', 'number': 2, 'link': '#'}],
      color: [],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  watch: {},
  computed: {},
  methods: {
    rainBow () {
      this.color = rainbowColor(this.tags.length, 30, 255)
    },
    shuffle () {
      this.tags = _.shuffle(this.tags)
    }
  },
  created () {},
  mounted () {
    this.rainBow()
  }
}
</script>

<style  lang="scss" scoped>
.tags{
  position: relative;
  // height: 420px;
  height: auto;
  background-color: var(--color);
  border-radius: 10px;
  display: flex;
  user-select: none;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;;
  text-align: center;
  .tag {
    overflow: hidden;
    width: 30%;
    margin: 2px;
    padding: 1px 2px;
    box-sizing: border-box;
    border: 1px solid rgba(134, 219, 131, 0.699);
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
}
.cell-move {
  transition: transform 1s;
}
</style>
