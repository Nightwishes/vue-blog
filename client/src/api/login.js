import axios from 'axios'
function loginGet (url1, obj) {
  const url = url1
  return axios.get(url, {
    params: obj
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
export {
  loginGet
}
