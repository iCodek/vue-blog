<template>
  <div class="tab">
    <router-link tag="div" class="index" to="/">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fangzi"></use>
      </svg>
      <span class="shouye">首页</span>
    </router-link>
    <span class="line"></span>
    <transition-group name="cell" tag="div" class="titles">
      <div class="titlesbox" v-for="(title,index) in titles" :key="title.name"  @click="shuffle">{{title.name}}
        <span class="count" :style="{backgroundColor : color[index]}">{{title.count}}</span>
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
      titles: [
        {
          name: '前端',
          count: 10
        },
        {
          name: '后端',
          count: 5
        },
        {
          name: '深度学习',
          count: 15
        },
        {
          name: 'Go',
          count: 8
        }
      ],
      color: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    rainBow () {
      this.color = rainbowColor(this.titles.length, 0, 220)
    },
    shuffle () {
      this.titles = _.shuffle(this.titles)
    }
  },
  created () {},
  mounted () {
    this.rainBow()
  }
}
</script>
<style lang="scss" scoped>
.tab{
  border-radius: 10px;
  background-color: var(--color);
  margin-bottom: 15px;
  display: flex;
  user-select: none;
  .index {
    margin: 4px 5px 4px 10px;
    @media screen and (max-width:500px){
      margin: 0;
    }
    text-align: center;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    svg {
      font-size: 3.2rem;
      flex: 1;
    }
    .shouye {
      font-size: 1rem;
      @media screen and (max-width:1200px){
        display: none;
      }
    }
    &:hover {
      color: #73c9e5;
    }
  }
  .line {
    display: inline-block;
    height: auto;
    border-left: 1px solid #e7e7e7;
    margin: 10px 15px 10px 5px;
  }
  .titles {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    .titlesbox {
      margin-right: 1rem;
      display: inline-block;
      font-size: 1.3rem;
      white-space: nowrap;
      @media screen and (max-width:1200px){
        font-size: 3.6vw;
      }
      cursor: pointer;
      &:hover {
        color: #73c9e5;
      }
      .count {
        display: inline-block;
        border-radius: 100%;
        width: 2.4vw;
        color: rgb(255, 255, 255);
        opacity: 0.7;
        @media screen and (max-width:1200px){
          width: 6vw;
        }
      }
      &:hover > .count{
      opacity: 1;
    }
    }
  }
  .cell-move {
    transition: transform 0.5s;
  }
}
</style>
