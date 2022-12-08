import express from "express"

const router = express.Router();

import {agregar, listar, eliminar, editar, listaUno, autenticar, crearCuenta} from '../controllers/usuarioControllers.js';

 import validarAutenticacion from "../middleware/validarAutenticacion.js"

 // rutas privadas
router.post("/", validarAutenticacion, agregar)
router.get("/", validarAutenticacion, listar)
router.delete("/:id",validarAutenticacion, eliminar)
router.put("/:id",validarAutenticacion, editar)
router.get("/:id",validarAutenticacion, listaUno)
// rutas publicas
 router.post("/login", autenticar)


 // rutas publicas 
 router.post("/login",  autenticar)
 router.post("/crear-cuenta",crearCuenta)
export default router;