<template>
  <div class="type-artcle">
    <div v-if="this.artArray.length" class="art-wrapper">
      <a v-for="(item, index) in artArray"
      :key="index"
      class="artcle-li"
      @click="xiuGai(item.id, index)"
      :class="{'active':activeIndex===index}">
        <li class="left-li">
          <a href="javascript:void(0)">
            <span class="artcle">Artcle:</span>
            <span class="artcle-title">{{item.title}}</span>
          </a>
        </li>
        <li class="right-li">
          <a href="javascript:void(0)" @click.stop="deleteArt(item.id, index)">删除</a>
          <a href="javascript:void(0)">修改</a>
        </li>
      </a>
    </div>
    <div v-else class="art-else">
      <span>鲁迅说: 人生最大的痛苦就是梦醒了无路可走</span>
      <span>戏剧家洪堔说: 我的梦想是明年的吃苦能力比今年强</span>
    </div>
    <div class="footer" v-if="this.artArray.length">
      <a href="javascript:void(0);" @click="pageDecrease">上一页</a>
      <span>{{currentPage + 1}}/{{count}}</span>
      <a href="javascript:void(0);" @click="pageAdd">下一页</a>

    </div>
  </div>
</template>
<script>
import { BASEURL, ERROK } from 'api/config'
import Bus from 'common/js/Bus'
export default {
  mounted () {
    // 此处注意隐似转换
    Bus.$on('refresh', type => {
      if (Number(this.$route.query.type) === type) {
        this._getArtcle()
      }
    })
  },
  data () {
    return {
      artArray: [],
      activeIndex: null,
      count: null,
      currentPage: 0
    }
  },
  created () {
    if (this.$route.fullPath.indexOf('?')) {
      this.$router.push('/Houtai')
    }
  },
  watch: {
    // 监听路由变化
    type () {
      this._getArtcle()
    }
  },
  computed: {
    type () {
      return this.$route.query.type
    }
  },
  methods: {
    pageDecrease () {
      if (this.currentPage === 0) return
      this.currentPage -= 1
      this._getArtcle()
    },
    pageAdd () {
      if (this.currentPage + 1 === this.count) return
      this.currentPage += 1
      this._getArtcle()
    },
    _getArtcle () {
      if (this.$route.fullPath.indexOf('Houtai/') === -1) {
        return
      }
      this.$http
        .get(`${BASEURL}/artcle`, {
          params: {
            type: this.$route.query.type,
            currentPage: Number(this.currentPage),
            u_id: this.$store.getters.usermsg.id
          }
        })
        .then(res => {
          if (res.data.code === ERROK) {
            console.log(res.data)
            this.$nextTick(() => {
              this.artArray = res.data.artcles
              this.count = Math.ceil(res.data.count / 9)
            })
          }
        })
    },
    deleteArt (id, index) {
      this.$http
        .delete(`${BASEURL}/artcle`, {
          params: {
            id
          }
        })
        .then(res => {
          if (res.data.code) {
            alert('删除失败!')
          }
          this.artArray.splice(index, 1)
        })
    },
    xiuGai (id, index) {
      this.activeIndex = index
      this.$http
        .get(`${BASEURL}/oneArtcle`, {
          params: {
            id
          }
        })
        .then(res => {
          if (res.data.code === ERROK) {
            Bus.$emit('xiugai', res.data.artcle)
          }
        })
    }
  }
}
</script>
<style lang="stylus">
.type-artcle
  position relative
  .footer
    position absolute
    bottom 0
    width 100%
    height 30px
    display flex
    justify-content space-around
    align-items center
    a
      &:hover
        color rgb(176, 7, 14)
  .art-else
    display: flex
    flex-direction: column
  .art-wrapper
    display: flex
    flex-direction: column
    justify-content: flex-start
    .artcle-li
      display: flex
      justify-content: space-between
      align-items: center
      box-sizing: border-box
      width: 100%
      height: 50px
      border-bottom: 1px solid white
      cursor: pointer
      .left-li
        width 75%
        a
          width 100%
          display flex
          justify-content flex-start
          align-items center
          color black
          .artcle
            width 20%
            margin-right 10px
          .artcle-title
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
      .right-li
        width 25%
        a
          color red
    .active
      color black
</style>
