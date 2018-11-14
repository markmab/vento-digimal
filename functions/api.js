require('dotenv').config()
const axios = require('axios')

const baseURL = 'https://nome-temporario.firebaseio.com/'
// const auth = process.env.AUTH
// const baseURL = 'https://como-fazer-tj.firebaseio.com/'
// const auth = 'DxUm3P6op4Go8Opzb0bYA1YPggXZ7zQHP677gTbS'

const listarPosts = async (id) => {
  const content = await axios.get(`${baseURL}posts${(id) ? '/' + id : id}.json`)
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
  apagar,
  get,
  update,
  create
}
