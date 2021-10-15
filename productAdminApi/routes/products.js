const { Router } = require('express')

const productsController = require('../controllers/product.controller')

const router = Router()

router.get('/', productsController.getAllProducts)
router.get('/random', productsController.getRandomProduct)
router.get('/:_id', productsController.getOneProduct)

router.post('/new', productsController.createNewProduct)
router.put('/update/:_id', productsController.updateOneProduct)
router.delete('/delete/:_id', productsController.deleteOneProduct)


module.exports = router