import axios from 'axios'
function houtaipost (url, obj) {
  return axios.post(url, obj).then((res) => {
    return Promise.resolve(res.data)
  })
}
export {
  houtaipost
}
