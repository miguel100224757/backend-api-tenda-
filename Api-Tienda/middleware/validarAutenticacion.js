import jwt from "jsonwebtoken";
import Usuario from "../model/Usuario.js";

const validarAutenticacion = async (req, res, next) => {
   //console.log(req.headers.authorization);

   let tokenJwt;

   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      try {
         tokenJwt = req.headers.authorization.split(' ')[1];

         const decode = jwt.verify(tokenJwt, process.env.TOKEN_JWT);
         req.usuario = await Usuario.findById(decode.id).select("-claveAcceso  -estadoUsuario -createdAt -updateAt -__v -idRol -celularUsuario -correoUsuario -idCiudad -tipodocUsuario -documentoUsuario -correoUsuario -celularUsuario");
         // console.log(req.usuario);
         return next()
      } catch (error) {
         return res.status(404).json({ msg: "token no valido", ok: "TOKEN_INVALIDO" })
      }
   }
   
   if (!tokenJwt) {
      const error = new Error("token no valido.")
      return res.status(401).json({msg: error.message, ok:"TOKEN_INVALIDO"})
   }
   next();
}
export default validarAutenticacion;