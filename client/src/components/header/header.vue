<template>
    <div class="header" ref="avatarhide">
        <div class="avatar">
          <img :src="showAvatar" alt="">
          <a href="javascript:void(0);" class="avatar-close" @click.stop.prevent="hide">
            <i class="icon-paragraph-justify"></i>
          </a>
        </div>
      <span v-if="!loginCheck" class="span">nightwish的博客</span>
      <a v-if="loginCheck" class="logined">
        <span>欢迎回来~</span>
        <a>{{usermsg.name}}</a>
      </a>
      <a v-else>
        <span>天道酬勤</span>
        <a @click="login('有人登录')">登录</a>
      </a>
      <div class="routes" v-if="loginCheck">
        <router-link :to="{name: 'Houtai'}" tag="a">后台</router-link>
        <!-- <router-link :to="{name: 'TodoList'}" tag="a">我想对你说</router-link> -->
        <router-link :to="{name: 'Doc'}" tag="a">doc</router-link>
      </div>
      <div v-else class="routes">
        <router-link :to="{name: 'Doc'}" tag="a">doc</router-link>
      </div>
      <a v-if="!loginCheck" href="http://www.baidu.com">项目地址</a>
      <a class="a" @click="back">
        退出
      </a>
      <div class="wrapper" v-show="wrapper"></div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import Bus from 'common/js/Bus'
export default {
  props: {
    loginCheck: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      avatar: false,
      wrapper: false
    }
  },
  mounted () {
    Bus.$on('hidden', () => {
      this.wrapper = false
    })
  },
  methods: {
    ...mapMutations(['userMessage']),
    back () {
      if (confirm('are you sure exit?')) {
        this.$emit('close')
        this.userMessage({
          id: null,
          name: ''
        })
        sessionStorage.removeItem('user_msg')
        this.$router.push('/Doc')
      }
    },
    login () {
      this.wrapper = true
      this.$emit('loginClick')
    },
    hide () {
      // console.log(this.$refs.avatarhide.style)
      console.log(1)
      if (!this.avatar) {
        this.$refs.avatarhide.style.left = 3 + 'px'
        this.avatar = true
      } else {
        this.$refs.avatarhide.style.left = -250 + 'px'
        this.avatar = false
      }
    }
  },
  computed: {
    ...mapGetters(['usermsg']),
    showAvatar () {
      const avatar = this.$store.state.user_msg.id
      if (avatar === 2) {
        return `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549191111458&di=1adb24c9db7d0cbf8a69b43a8e7f4f14&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F31%2F20180331093958_2jxAT.jpeg`
      } else if (avatar === 3) {
        return `http://imgsrc.baidu.com/forum/pic/item/4ab273fdfc039245f6ada7458594a4c27c1e25d8.jpg`
      } else {
        return `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549190909462&di=1932200d2cd7dbda1eb82e7833cda3a9&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fe4dde71190ef76c64cb754899b16fdfaaf51672f.jpg`
      }
    }
  }
}
</script>
<style lang="stylus">
  .header
    font-family "宋体"
    width 290px
    height 60%
    position fixed
    top 15%
    left -250px
    display flex
    flex-direction column
    align-items center
    justify-content space-between
    background #EAEAEA
    font-weight 700
    z-index 1
    transition 2s
    .span
      font-weight 700
      color black
    .avatar
      position relative
      width 100%
      height 150px
      background black
      text-align center
      .avatar-close
        position absolute
        right 0px
        top 5px
      img
        width 150px
        height 150px
        border-radius 50%
    .routes
      display flex
      flex-direction column
    span,a
      font-size 22px
      margin 10px 5px
      cursor pointer
      &:hover
        color rgb(176, 7, 14)
    .logined
        font-size 25px
    .wrapper
      position fixed
      width 100%
      height 100%
      left 0
      top 0
      background black
      opacity .8
      z-index 1
</style>
