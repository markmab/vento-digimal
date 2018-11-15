const express = require('express')
const router = express.Router()
const controller = require('../controllers/posts')

router.get('/', controller.listPosts)
router.get('/nova', controller.novaForm)
router.get('/:id', controller.listPosts)
router.post('/nova', controller.nova)
router.get('/reviewer/:reviewer', controller.list)
router.get('/excluir/:reviewer/:id', controller.excluir)
router.get('/editar/:reviewer/:id', controller.editarForm)
router.post('/editar/:reviewer/:id', controller.editar)

module.exports = router
