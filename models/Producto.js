const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({
    productoNombre:{
        type: String,
        required: true,
        trim: true
    },
    productoDescripcion: {
        type: String,
        required: true
        
    },
    productoCantidad: {
        type: Number,
        required: true,
        trim: true

    },
    productoUbicacion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Producto', ProductosSchema);