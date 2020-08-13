const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    imagePath:{ type: String, required: true},
    title:{type: String, required: true},
    description: {type: String, required: true},
    price:{type: Number, required: true}
});

module.exports = model('products',productSchema);