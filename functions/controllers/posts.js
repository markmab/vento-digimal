const api = require('../api')
const dateFormat = require('dateformat')
let now = new Date()

const novaForm = async (req, res) => {
  const reviewers = await api.listar('reviewers')
  res.render('posts/novo-post', { reviewers })
}
const nova = async (req, res) => {
  await api.create('posts/' + req.body.reviewer, {
    'titulo': req.body.titulo,
    'subTitulo': req.body.subTitulo,
    'slug': req.body.slug,
    'conteudo': req.body.conteudo,
    'keywords': req.body.keywords,
    'description': req.body.description,
    'ogTitle': req.body.ogTitle,
    'ogDescription': req.body.ogDescription,
    'ogImage': req.body.ogImage,
    'robots': req.body.robots,
    'referrer': req.body.referrer,
    'applicationName': req.body.applicationName,
    'XUACompatible': req.body.XUACompatible,
    'refresh': req.body.refresh,
    'data': dateFormat(now, 'yyyy-dd-mm')
  })
  res.redirect('/posts/reviewer/' + req.body.reviewer)
}
const list = async (req, res) => {
  const reviewer = req.params.reviewer
  const posts = await api.listar('posts/' + reviewer)
  if (posts) {
    res.render('posts/index', { posts, reviewer })
  } else {
    res.render('posts/index', { posts: [] })
  }
}
const listSingle = async (req, res) => {
  const post = await api.listarSingle(req.params.reviewer, req.params.id)

  // res.send(post)
  res.render('posts/single-post', { post })
}
const listPosts = async (req, res) => {
  const reviewer = req.params.reviewer
  const posts = await api.listarPosts(req.params.id)
  if (posts) {
    res.render('posts/index', { posts, reviewer })
  } else {
    res.render('posts/index', { posts: [] })
  }
}
const excluir = async (req, res) => {
  await api.apagar('posts/' + req.params.reviewer, req.params.id)
  res.redirect('/posts/reviewer/' + req.params.reviewer)
}
const editarForm = async (req, res) => {
  const reviewer = req.params.reviewer
  const post = await api.get('posts/' + req.params.reviewer, req.params.id)
  res.render('posts/editar', {
    post,
    reviewer
  })
}
const editar = async (req, res) => {
  await api.update('posts/' + req.params.reviewer, req.params.id, {
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  })
  res.redirect(`/posts/reviewer/${req.params.reviewer}/`)
}
module.exports = {
  novaForm, nova, list, excluir, editarForm, editar, listPosts, listSingle
}
