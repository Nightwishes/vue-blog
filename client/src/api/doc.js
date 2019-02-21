import axios from 'axios'
import { BASEURL } from './config'
function getDoc (obj) {
  return axios.get(`${BASEURL}/doc`, {
    params: obj
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
export {
  getDoc
}