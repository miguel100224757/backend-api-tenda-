import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import cors from 'cors';

// importamos los archivos de rutas //
import rolesRouter from './routes/rolesRouter.js'
import usuarioRouter from './routes/usuarioRouter.js'
import categoriaRouter from './routes/categoriaRouter.js'
import ciudadRouter from './routes/ciudadRouter.js'
import detalleRouter from './routes/detalleRouter.js'
import pedidoRouter from './routes/pedidoRouter.js'
import productoRouter from './routes/pedidoRouter.js'

// en los scripts del package.json se configuro los arranques //
// control + c para terminar el proceso por lotes s //


// INICIAOS CON EL SERVIDOR DE EXPRESS//
const app = express();

// para leer datos en formato JSON 
app.use(express.json())

// inicilizar el uso de las variables de ambientes //
dotenv.config();

// conectamos a la base de datos de mongodb
conectarDB();

// permitir conexiones externas con cors 
const whiteList = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.includes(origin)) {
            callback(null, true);
            //puede consultar el api
           
        } else {
            // no permitimos consultar el api.
            callback(new Error("Error de cors."));
           
        }
    },
};
app.use(cors(corsOptions));



//  req -> peticion al servidor
// res -> respuesta del servidor
// definicion de las rutas (mapeos)
app.use('/api/roles', rolesRouter)
app.use('/api/usuario', usuarioRouter)
app.use('/api/categoria', categoriaRouter)
app.use('/api/ciudad', ciudadRouter)
app.use('/api/detalle-pedido', detalleRouter)
app.use('/api/pedido', pedidoRouter)
app.use('/api/producto', productoRouter)


// conectamos con el puerto.
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor conrriendo en el puerto ${PORT}`);
})