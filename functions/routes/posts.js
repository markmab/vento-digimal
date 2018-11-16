const express = require('express')
const router = express.Router()
const controller = require('../controllers/posts')

router.get('/', controller.listPosts)
router.get('/nova', controller.novaForm)
router.post('/nova', controller.nova)
router.get('/:slug', controller.listSingle)
router.get('/reviewer/:reviewer', controller.list)
router.get('/editar/:reviewer/:id', controller.editarForm)
router.post('/editar/:reviewer/:id', controller.editar)
router.get('/:reviewer/:id', controller.listSingle)

module.exports = router
