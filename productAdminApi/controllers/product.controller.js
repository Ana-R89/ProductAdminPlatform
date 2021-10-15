const productService = require('../services/products.service')

module.exports = {
    getAllProducts: async (req, res) => {
        const products = await productService.getAllProducts()
        res.send({ products })
    },

    getRandomProduct: async (req, res) => {
        const product = await productService.getRandomProduct()
        res.send({ product })
    },

    getOneProduct: async (req, res) => {
        console.log("get one product")
        const product = await productService.getOneProduct()
        res.send({ product })
    },

    createNewProduct: async ({ body }, res) => {
        console.log(body)
        try {
            const product = await productService.createNewProduct(body)
            res.send({ product })
        } catch (error) {
            res.status(400).json(error)
        }

    },

    updateOneProduct: async ({ params: { _id }, body }, res) => {
        const product = await productService.updateOneProduct(_id, body)
        res.send({ product })
    },
    deleteOneProduct: async ({ params: { _id } }, res) => {
        const { deletedCount } = await productService.deleteOneProduct(_id)
        if (deletedCount > 0) return res.status(204).send('Product deleted')
        return res.status(404).send('Product not found')
    }
}




