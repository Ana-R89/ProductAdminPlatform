const Mongoose = require('mongoose')

const productSchema = new Mongoose.Schema(
    {
        nameProduct: { 
            type: String
            
        },
        
        model: {
             type: String 
        },
        weight: { 
            type: Mongoose.Types.Decimal128
        },

    },
    { timestamps: true }
)

module.exports = Mongoose.model('Product', productSchema)
