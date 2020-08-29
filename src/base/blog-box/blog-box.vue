<template>
  <router-link tag="div" class="blog-box" :to="{ name: 'MdView', params: { blogId: blogSummary.id }}">
    <div class="pic" :style="{backgroundImage : 'url(https://random.52ecy.cn/randbg.php/'+index+')'}"></div>
    <div class="mask"></div>
    <div class="title">{{blogSummary.title}}</div>
    <div class="foot">
      <div class="description">{{blogSummary.description}}</div>
      <div class="line"></div>
      <div class="sum">
        <div class="time">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shijian"></use>
          </svg>
          {{blogSummary.time}}
        </div>
        <div class="count">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liulan2"></use>
            </svg>
            {{blogSummary.views}}
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun2"></use>
            </svg>
            {{blogSummary.comments}}
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dianzan1"></use>
            </svg>
            {{blogSummary.likes}}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  components: {},
  props: {
    blogSummary: {
      type: Object,
      default () {
        return {}
      }
    },
    index: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {
    path () {
      return '/' + this.blogSummary.id
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style  lang="scss" scoped>
.blog-box{
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: box-shadow 0.4s ease;
  position: relative;
  width: 100%;
  padding-top: 40%;
  // height: 200px;
  overflow: hidden;
  margin-bottom: 3.2%;
  &:last-child {
    margin-bottom: 0;
  }
  .pic {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    // background: url(https://random.52ecy.cn/randbg.php);
    background-position: center 36%;
    background-size: cover;
    opacity: calc(var(--opacity) * 2);
    transition: transform 0.2s ease, filter 0.6s ease;
  }
  .mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition: background-color 0.6s ease;
    background-color: rgba($color: #000000, $alpha: 0.15);
    opacity: var(--opacity);
  }
  .title {
    width: 80%;
    line-height: 50px;
    font-size: 4vw;
    position: absolute;
    transition: all 0.2s ease;
    top: 40%;
    left: 50%;
    color: #fff;
    text-shadow: 0 0 5px #000;
    transform: translate(-50%, -50%);
    @media screen and (max-width:1200px){
      font-size: 6vw;
    }
    @media screen and (max-width:1600px) and (min-width:1200px){
      font-size: 3vw;
    }
  }
  .foot {
    position: absolute;
    bottom: 10%;
    height:30%;
    width: 100%;
    opacity: 0;
    transition: all 0.2s ease;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:1200px){
      font-size: 2vw;
    }
    @media screen and (max-width:1600px) and (min-width:1200px){
      font-size: 1.2vw;
    }
    @media screen and (min-width:2000px){
      font-size: 1.8vw;
    }
    .description {
      flex: 1;
      top: 0;
      margin: 0 1vw;
      color: #fff;
      text-align: left;
      overflow: hidden;
    }
    .line {
      width: 96%;
      height: 1px;
      margin: 0.2rem auto;
      background-color: rgba($color: #ffffff, $alpha: 0.5);;
    }
    .sum {
      color: #fff;
      width: 96%;
      margin: 0.3rem auto;
      margin-top: 0;
      display: flex;
      .icon {
        font-size: 1.3rem;
        margin-bottom: 0.15rem;
        @media screen and (max-width:1200px){
          font-size: 2vw;
        }
        @media screen and (max-width:1600px) and (min-width:1200px){
          font-size: 1.2vw;
        }
        @media screen and (min-width:2000px){
          font-size: 1.8vw;
        }
      }
      .time {
        text-align: left;
        flex: 1;
      }
      .count {
        div {
          display: inline-block;
          margin-left: 1vw;
        }
      }
    }
  }
  &:hover > .pic {
    transform: scale(1.2);
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }
  &:hover {
    box-shadow: 3px 3px 12px 3px rgba(0,0,0,.2)!important;
  }
  &:hover > .mask{
    background-color: rgba($color: #4d4c4c, $alpha: 0.5);
  }
  &:hover > .title{
    text-shadow: 0 0 2px #fff;
    top: 22%;
    transform: translate(-50%, -50%) scale(1.2);
  }
  &:hover > .foot{
    bottom: 0;
    height:58%;
    opacity: 1;
  }
}
</style>
