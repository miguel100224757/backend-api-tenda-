import express from "express"

const router = express.Router();

import {agregar, listar, eliminar, editar, listaUno, comboRoles} from '../controllers/rolControllers.js';

 import validarAutenticacion from "../middleware/validarAutenticacion.js";

 // rutas privadas
 router.get("/combo-roles", validarAutenticacion, comboRoles); 
router.post("/", validarAutenticacion, agregar );
router.get("/", validarAutenticacion, listar);
router.delete("/:id", validarAutenticacion, eliminar);
router.put("/:id",validarAutenticacion, editar);
router.get("/:id",validarAutenticacion, listaUno);

export default router;