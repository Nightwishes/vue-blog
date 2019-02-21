<template>
  <div id="app">
    <Show class="show"></Show>
    <Header :loginCheck="log_Checked" @loginClick="loginChecked" @close="closed"></Header>
    <!-- <Mofang class="mofang" ref="Mofang" v-if="log_Checked"></Mofang> -->
    <div v-show="check" ref="login" class="loginput">
      <div>
        <span>用户名:</span>
        <input type="text" v-model.trim.lazy="username">
      </div>
      <div>
        <span>密码:</span>
        <input type="password" v-model.trim.lazy="password"  @keyup.enter.stop="login">
      </div>
      <button @click="login" class="button">去别的星球！</button>
      <a @click.stop="hidden" class="close">
      <i class="icon-cross"></i>

     </a>
    </div>
    <!-- 这个样式在全局里 -->
    <transition name="fading">
      <keep-alive>
      <router-view class="routes" mode="out-in"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Header from 'components/header/header'
import Mofang from 'base/Mofang/Mofang'
import Show from 'components/show/show'
import Bus from 'common/js/Bus'
// 使用vuex的语f法糖
import { mapMutations, mapGetters } from 'vuex'
// 登录验证api
import { loginGet } from 'api/login'
import { BASEURL, ERROK } from 'api/config'
export default {
  name: 'App',
  mounted () {
    if (sessionStorage.user_msg) {
      console.log(JSON.parse(sessionStorage.user_msg))
      this.$nextTick(function () {
        this.log_Checked = true
        this.userMessage(JSON.parse(sessionStorage.user_msg))
      })
    }
  },
  data () {
    return {
      check: false,
      log_Checked: false,
      username: '',
      password: '',
      hide: true
    }
  },
  methods: {
    ...mapMutations(['userMessage']),
    loginChecked () {
      this.check = true
    },
    hidden () {
      this.check = false
      Bus.$emit('hidden')
    },
    login () {
      let obj = {username: this.username, password: this.password}
      // this.$route.meta.login = false
      loginGet(`${BASEURL}/login`, obj).then(res => {
        if (res.code !== ERROK) {
          let button = document.querySelector('button')
          button.style.display = `none`
          return
        }
        this.log_Checked = true
        let userObj = {
          id: res.data.id,
          name: res.data.username
        }
        sessionStorage.user_msg = JSON.stringify(userObj)
        this.userMessage(userObj)
        this.hidden()
      })
    },
    closed () {
      this.log_Checked = false
    }
  },
  computed: {
    ...mapGetters({
      user_msgs: 'usermsg'
    })
  },
  components: {
    Header,
    Mofang,
    Show
  }
}
</script>

<style lang="stylus" scoped>
.routes
  position absolute
  width 100%
  height 100%
  left 0
  top 0
  z-index -1
.mofang
  position fixed
  width 150px
  height 150px
  bottom 100px
  right 150px
.loginput
  display flex
  position relative
  flex-direction column
  justify-content center
  align-items center
  width 500px
  height 300px
  background #EAEAEA
  opacity .7
  margin 200px auto
  z-index 10001
  .close
    position absolute
    right 5px
    top 5px
    width 30px
    height 30px
    border-radius 50%
    text-align center
    line-height  30px
    background black
    cursor pointer
  .button
    margin-top 30px
  div
    display flex
    width 80%
    margin 20px auto
    justify-content center
    align-items center
    span
      width 60px
      margin-right 20px
    input
      flex 1
      height 30px
      border-radius 5px
.show
  width 100%
  height 100%
</style>
