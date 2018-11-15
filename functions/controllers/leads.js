const api = require('../api')
const dateFormat = require('dateformat')
let now = new Date()
// var ipaddr = require('ipaddr.js')

const nova = async (req, res) => {
  const leadIp = (req.headers['x-forwarded-for'])
    ? req.headers['x-forwarded-for'].split(',')[1].trim()
    : req.headers['x-forwarded-for']
  await api.create('leads', {
    'email': req.body.email,
    'nome': req.body.nome,
    'tipo': req.body.tipo,
    'ip': leadIp,
    'data_hora': dateFormat(now, 'yyyy-dd-mm hh:mm:ss')
  })
  res.redirect('/leads/nova')
  // req.connection.remoteAddress
}
const novaForm = async (req, res) => {
  const reviewers = await api.listar('reviewers')
  res.render('leads/form', { reviewers })
}
module.exports = {
  nova, novaForm
}
