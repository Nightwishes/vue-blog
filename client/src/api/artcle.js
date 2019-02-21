import axios from 'axios'

function getTypeArtcle (url, type) {
  return axios.get(url, {
    params: {
      type
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
function getOneArtcle (url, id) {
  return axios.get(url, {
    params: {
      id
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
export {
  getTypeArtcle,
  getOneArtcle
}