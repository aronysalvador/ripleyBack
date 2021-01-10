const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

//Conexion a la BD
conectarDB();

//Habilitar Cors
app.use(cors());

//Habilitar express.json(Lerr data de la rest api )
app.use( express.json({ extended: true }));

//Puerto de la APP(Modificar en variables.env)
const PORT = process.env.PORT || 4000;

//Ruta de productos
app.use('/api/productos', require('./routes/productos'));

app.listen(PORT, '0.0.0.0',() => {
    console.log(`El servidor esta funcionancion en el puerto  ${PORT}`)
})