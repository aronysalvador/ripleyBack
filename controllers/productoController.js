const Producto = require('../models/Producto');

//Crea un producto(POST)
exports.crearProducto = async (req,res) =>{

    try {

        //Crea el nuevo producto
        const producto = new Producto(req.body);

        //Guardar producto
        await producto.save();

        //Mensaje de confirmacion     
        res.json({ msg:'Producto creado correctamente'});

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'No se pudo crear el Producto' });
    }
}

//Obtiene todos los productos(GET)
exports.obtenerProductos = async (req,res) => {
    try {
        const productos = await Producto.find();
        res.json({productos});
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'No se pudo obtener los productos' });
    }
}

//Actualizar un Producto
exports.actualizarProducto = async (req,res) => {
    
    const { productoNombre, productoDescripcion, productoPrecio, productoMarca } = req.body;
    const nuevoProducto = {};
    if(productoNombre) {
        nuevoProducto.productoNombre = productoNombre;
    }
    if(productoDescripcion) {
        nuevoProducto.productoDescripcion = productoDescripcion;
    }
    if(productoPrecio) {
        nuevoProducto.productoPrecio = productoPrecio;
    }
    if(productoMarca) {
        nuevoProducto.productoMarca = productoMarca;
    }
    
    try {
        //Revisar el ID
        let producto = await Producto.findById(req.params.id);

        //Si el producto existe o no
        if(!producto) {
            return res.status(404).json({msg:'Producto no encontrado'})
        }
        //Actualizar
        producto = await Producto.findByIdAndUpdate({_id: req.params.id}, {$set : nuevoProducto} , { new:true });

        res.json({producto});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'No se pudo actualizar el producto' });
    }
}

//Eliminar un producto
exports.eliminarProducto = async (req,res) => {

    try {
        //Revisar el ID
        let producto = await Producto.findById(req.params.id);

        //Si el producto existe o no
        if(!producto) {
            return res.status(404).json({msg:'Producto no encontrado'})
        }

        //Eliminar el producto
        await Producto.findOneAndRemove({ _id : req.params.id});
        res.json({ msg: 'Producto Eliminado'});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'No se pudo eliminar el producto' });
    }
}