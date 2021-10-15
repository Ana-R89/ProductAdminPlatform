const Product = require('../models/Product');

module.exports = {

    //all products funciona ok 
    getAllProducts: () => Product.find({}),

    //random products funciona ok
    getRandomProduct: async () => {
        console.log('getRandomProduct')
        const productsAmount = await Product.countDocuments()
        const random = Math.floor(Math.random() * (productsAmount - 1))
        const product = await Product.findOne({}).skip(random)
        return product
    },

    //product.findOne({_id: id}) testear 
    
    // getOneProduct: async (_id) => { await Product.findOne({ _id })
    //     return product.getOne({_id})
    // },

    getOneProduct: async (_id) => {
        await Product.findOne({ _id })
        return Product.getOne({_id})
    },

    //create product funciona ok
    createNewProduct: async (product) => {
        const newProduct = await new Product(product)
        return newProduct.save()
    },

    //query, update, options  ??? no funciona bien 
    
    //delete (funciona ok)
    updateOneProduct: async (_id, product) => { await Product.findOneAndUpdate({ _id}, product, {new: true, runValidators: true})
        return product.save()
    },

    deleteOneProduct: (_id) => {
        return Product.deleteOne({_id})
    }

}