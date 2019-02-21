<template>
  <div class="Houtai">
    <div class="main">
      <div class="main_menu">
        <ul class="menu_ul">
          <router-link tag="a" :to="{path: '/Houtai/Xuexi?type=1'}">学习记录</router-link>
          <router-link tag="a" :to="{path: '/Houtai/Mingren?type=2'}">胡言乱语</router-link>
          <router-link tag="a" :to="{path: '/Houtai/shenghuo?type=3'}">生活记录</router-link>
        </ul>
          <type-artcle class="type"></type-artcle>
      </div>
      <div class="main_content">
        <card class="card" @post="post"></card>
        <mavon-editor v-model="value" class="editor" @imgAdd="$imgAdd" ref="md"/>
      </div>
    </div>
  </div>
</template>
<script>
import Card from 'base/card/Card'
import { ERROK, BASEURL } from 'api/config'
import { houtaipost } from 'api/houtai'
import Bus from 'common/js/Bus'
import TypeArtcle from 'components/typeArtcle/typeArtcle'
import { mapGetters } from 'vuex'
export default{
  name: 'Houtai',
  mounted () {
    Bus.$on('xiugai', obj => {
      this.value = obj.content
    })
  },
  data () {
    return {
      value: ''
    }
  },
  created () {
    console.log(this.usermsg.id)
  },
  methods: {
    post (msg, type) {
      let obj = {
        id: this.usermsg.id,
        title: msg,
        content: this.value,
        type: type
      }
      houtaipost(`${BASEURL}/artcle`, obj).then(data => {
        if (data.code) {
          alert('添加shibai')
        }
      })
    },
    $imgAdd (pos, $file) {
      var formdate = new FormData()
      formdate.append('image', $file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$http.post(`${BASEURL}/artcleImage`, formdate, config).then(res => {
        if (res.data.code === ERROK) {
          this.$refs.md.$img2Url(pos, res.data.url)
        }
      })
    }
  },
  computed: {
    ...mapGetters(['usermsg'])
  },
  components: {
    Card,
    TypeArtcle
  }
}
</script>

<style lang="stylus">
  @import '~@/components/Houtai/Houtai.styl'
</style>
