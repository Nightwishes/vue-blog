<template>
  <div class="doc">
    <div class="main">
      <!-- 乱掉了 做完才发现有这个布局 将错就错了 -->
      <div class="main-header">
      </div>
      <div class="doc-artcle" v-if="this.docArray.length !== 0">
        <li v-for="(item) in this.docArray" :key="item.id" class="artcle-li">
          <a @click.stop.prevent="getArtcle(item.id)">
            <span class="title">{{item.title}}</span>
            <span class="content">{{item.content}}</span>
          </a>
          <span class="span">{{type(item.type)}}</span>
        </li>
        <div class="doc-footer">
          <a @click.stop.prevent="getPrevPage">上一页</a>
          <span>{{showCount}}</span>
          <a @click.stop.prevent="getNextPage">下一页</a>
        </div>
      </div>
    </div>
    <div class="todolist">
     <span class="title">我曾七次鄙视自己的灵魂</span>
     <li v-for="(text, index) in textArray" :key = index>
       {{text.text}}
     </li>
     <span class="anthor">———— 纪伯伦</span>
    </div>
  </div>
</template>
<script>
import { getDoc } from 'api/doc'
import { mapMutations } from 'vuex'
export default {
  name: 'Doc',
  data () {
    return {
      docArray: [],
      page: 0,
      count: null,
      textArray: [
        {text: '第一次，当它本可进取时，却故作谦卑'},
        {text: '第二次， 当它在空虚时，用爱欲来填充'},
        {text: '第三次，在困难和容易之间，它选择了容易'},
        {text: '第四次，它犯了错，却借由别人也会犯错来宽慰自己'},
        {text: '第五次，它自由软弱，却把它认为是生命的坚韧'},
        {text: '第六次，当它鄙夷一张丑恶的嘴脸时，却不知那正是自己面具中的一副'},
        {text: '第七次, 当它侧身于生活的泥垢中，岁不甘心，却又畏首畏尾'}
      ]
    }
  },
  created () {
    this._getDoc(this.page)
  },
  methods: {
    ...mapMutations(['artcleMsg']),
    getArtcle (id) {
      this.artcleMsg(id)
      console.log(1)
      setTimeout(() => {
        this.$router.push('/Artcle')
      }, 30)
    },
    _getDoc (page) {
      let obj = {
        page
      }
      getDoc(obj).then(data => {
        this.docArray = data.artcles.rows
        this.count = data.artcles.count
      })
    },
    type (type) {
      if (type === 1) {
        return '学习记录'
      } else if (type === 2) {
        return '胡言乱语'
      } else {
        return '生活记录'
      }
    },
    getPrevPage () {
      if (this.page === 0) return
      this.page -= 1
      this._getDoc(this.page)
    },
    getNextPage () {
      if ((this.page + 1) === (Math.ceil(this.count / 8))) return
      this.page += 1
      this._getDoc(this.page)
    }
  },
  computed: {
    showCount () {
      return `${this.page + 1} / ${Math.ceil(this.count / 8)}`
    }
  }
}
</script>
<style lang="stylus" scoped>
  .main
    width 60%
    opacity .7
    margin 15px 0 0 320px
    .main-header
      width 100%
      height 100px
  .doc-artcle
    position relative
    margin-top 10px
    height 690px
    .doc-footer
      position absolute
      bottom 0
      width 100%
      height 40px
      display flex
      justify-content space-around
      align-items center
      a
        color black
        font-weight 700
        cursor pointer
    .artcle-li
      position relative
      width 100%
      height 60px
      margin-top 20px
      background #EAEAEA
      opacity .8
      border-radius 3px
      .span
        position absolute
        right 5px
        bottom 5px
        font-size 14px
        color black
      a
        width 100%
        height 100%
        display flex
        justify-content flex-start
        align-items center
        color black
        cursor pointer
        .title
          width 20%
          height 100%
          opacity .9
          font-weight 700
          line-height 60px
          margin-left 30px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .content
          width 70%
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
  .todolist
    position relative
    width 10%
    height 40%
    opacity .7
    position absolute
    right 4%
    top 15%
    .title
      font-size 16px
      font-weight 700
      text-align center
    li
      margin-top 10px
      font-size 12px
      line-height 15px
    .anthor
      position absolute
      right 0
      bottom 0
</style>
