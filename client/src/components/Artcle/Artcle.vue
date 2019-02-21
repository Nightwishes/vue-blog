<template>
  <div class="artcle">
    <div class="artcle-show markdown-body" v-html="content">
    </div>
    <a href="#top" class="maodian">top</a>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getOneArtcle } from 'api/artcle'
import { BASEURL, ERROK } from 'api/config'
import marked from 'marked'
import highLightJS from 'highlightjs'
export default {
  name: 'Artcle',
  created () {
    if (!this.artclemsg.id) {
      this.$router.push('/Doc')
    } else {
      this._getOneArtcle()
    }
  },
  beforeDestroy () {
    console.log('destroy')
  },
  data () {
    return {

      content: ''
    }
  },
  methods: {
    _getOneArtcle () {
      getOneArtcle(`${BASEURL}/oneArtcle`, this.artclemsg.id).then(data => {
        console.log(data)
        if (data.code === ERROK) {
          marked.setOptions({
            highlight: (code) => highLightJS.highlightAuto(code).value
          })
          let timer = setTimeout(() => {
            this.content = marked(data.artcle.content)
            clearTimeout(timer)
          }, 30)
        }
      })
    }
  },
  computed: {
    ...mapGetters(['artclemsg']),
    id () {
      return this.artclemsg.id
    }
  },
  watch: {
    id () {
      this._getOneArtcle()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .artcle-show
    padding 100px
    width 50%
    min-height 80%
    background rgba(255,255,255, .65)
    margin 0 auto
  .maodian
    position fixed
    bottom 100px
    right 100px
    width 70px
    height 70px
    font-size 20px
    text-align center
    line-height 70px
    border-radius 5px
    background white
    color black
</style>
