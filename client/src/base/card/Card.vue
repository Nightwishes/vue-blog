<template>
  <div class="card">
    <div class="front-card">
       <span>标题: <input type="text" v-model.trim="titleValue"></span>
      <select name="" id="" v-model="selected">
        <option v-for="(option, index) in options" :key="index" :value="option.value">{{option.text}}</option>
      </select>
      <button @click.stop.prevent="postArtcle">提交</button>
    </div>
  </div>
</template>
<script>
import Bus from 'common/js/Bus'
export default {
  mounted () {
    Bus.$on('xiugai', obj => {
      this.titleValue = obj.title
      this.selected = obj.type
    })
  },
  data () {
    return {
      titleValue: '',
      selected: 1,
      options: [
        {text: '学习博文', value: 1},
        {text: '名人名句', value: 2},
        {text: '生活记录', value: 3}
      ]
    }
  },
  methods: {
    postArtcle () {
      this.$emit('post', this.titleValue, this.selected)
      let timer = setTimeout(() => {
        Bus.$emit('refresh', this.selected)
        clearTimeout(timer)
      }, 200)
    }
  }
}
</script>
<style lang="stylus">
.front-card
  position relative
  height 100%
  color black
  background #eaeaea
  display flex
  justify-content space-around
  align-items center
  select
    position absolute
    left 5px
    bottom 5px
</style>
