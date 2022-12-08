import express from "express"

const router = express.Router();

import {agregar, listar, eliminar, editar, listaUno} from '../controllers/ciudadControllers.js';

// import validarAutenticacion from "../middleware/validarAutenticacion.js"

router.post("/", agregar ) //validarAutenticacion ,agregar )
router.get("/", listar)
router.delete("/:id", eliminar)
router.put("/:id", editar)
router.get("/:id", listaUno)

export default router;