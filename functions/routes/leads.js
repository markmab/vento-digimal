const express = require('express')
const router = express.Router()
const controller = require('../controllers/leads')

router.get('/nova', controller.novaForm)
router.post('/nova', controller.nova)

module.exports = router
