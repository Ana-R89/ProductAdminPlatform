const { Router } = require('express')

const router = Router()

//rutas principales

router.use('/products', require('./products'))

module.exports = router

