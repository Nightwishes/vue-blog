// vuex mutation 传参第二个形参只能是一个payload
export default {
  userMessage (state, obj) {
    state.user_msg = obj
  },
  artcleMsg (state, id) {
    state.artcle_msg.id = id
  }
}
