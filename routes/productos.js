const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Crea un producto
// api/productos
router.post('/',
    productoController.crearProducto

);

//Obtener todos los productos
router.get('/',
    productoController.obtenerProductos

);

//Actualizar producto via ID
router.put('/:id',
    productoController.actualizarProducto
  
);

//Eliminar un Producto
router.delete('/:id',
    productoController.eliminarProducto

);

module.exports = router;