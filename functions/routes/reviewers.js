const express = require('express')
const router = express.Router()
const controller = require('../controllers/reviewers')

router.get('/', controller.list)
router.get('/nova', controller.novaForm)
router.get('/editar/:id', controller.editarForm)
router.post('/nova', controller.nova)
router.post('/editar/:id', controller.editar)

module.exports = router
