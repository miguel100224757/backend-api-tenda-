import express from "express"

const router = express.Router();

import {agregar, listar, eliminar, editar, listaUno} from '../controllers/detallesControllers.js';

router.post("/", agregar)
router.get("/", listar)
router.delete("/", eliminar)
router.put("/", editar)
router.get("/:id", listaUno)

export default router;