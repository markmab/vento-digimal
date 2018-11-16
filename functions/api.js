require('dotenv').config()
const axios = require('axios')

const baseURL = 'https://nome-temporario.firebaseio.com/'
// const auth = process.env.AUTH
// const baseURL = 'https://como-fazer-tj.firebaseio.com/'
// const auth = 'DxUm3P6op4Go8Opzb0bYA1YPggXZ7zQHP677gTbS'

const listarPosts = async (id) => {
  const content = await axios.get(`${baseURL}posts.json`)
  if (content.data) {
    const objetos = Object.keys(content.data).map(key => {
      return {
        ...content.data[key]
      }
    })
    console.log(objetos)
    return objetos
  }
  return []
}

// const listarSingle = async (rev, id) => {
//   const content = await axios.get(`${baseURL}posts/-LRMDPuDapCmJFJSo_9S/${id}.json`)
//   return content.data
// }

const listarSingle = async (slug) => {
  const content = await axios.get(`${baseURL}/posts.json`)
  const key = Object.keys(content.data).find(key => {
    return content.data[key].slug === slug
  })
  return content.data[key]
}

const listar = async (key) => {
  const content = await axios.get(`${baseURL + key}.json`)

  if (content.data) {
    const objetos = Object.keys(content.data).map(key => {
      return {
        id: key,
        ...content.data[key]
      }
    })
    return objetos
  }
  return []
}

const apagar = async (key, id) => {
  await axios.delete(`${baseURL + key + '/' + id}.json`)
  return true
}
const get = async (key, id) => {
  const content = await axios.get(`${baseURL + key + '/' + id}.json`)
  return {
    id: id,
    ...content.data
  }
}
const update = async (key, id, data) => {
  await axios.put(`${baseURL + key + '/' + id}.json`, data)
  return true
}
const create = async (key, data) => {
  await axios.post(`${baseURL + key}.json`, data)
  return true
}
module.exports = {
  listar,
  listarPosts,
  listarSingle,
  apagar,
  get,
  update,
  create
}
