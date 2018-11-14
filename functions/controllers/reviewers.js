const api = require('../api')

const novaForm = (req, res) => {
  res.render('reviewers/nova')
}
const nova = async (req, res) => {
  await api.create('reviewers', {
    'reviewer': req.body.reviewer
  })
  res.redirect('/reviewers')
}
const list = async (req, res) => {
  const reviewers = await api.listar('reviewers')
  if (reviewers) {
    res.render('reviewers/index', { reviewers: reviewers })
  } else {
    res.render('reviewers/index', { reviewers: [] })
  }
}
const excluir = async (req, res) => {
  await api.apagar('reviewers', req.params.id)
  await api.apagar('publicacoes/', req.params.id)
  res.redirect('/reviewers')
}
const editarForm = async (req, res) => {
  const reviewer = await api.get('reviewers', req.params.id)
  res.render('reviewers/editar', {
    reviewer
  })
}
const editar = async (req, res) => {
  await api.update('reviewers', req.params.id, {
    reviewer: req.body.reviewer
  })
  res.redirect('/reviewers')
}
module.exports = {
  novaForm, nova, list, excluir, editarForm, editar
}
