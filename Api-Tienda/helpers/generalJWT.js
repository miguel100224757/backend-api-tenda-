import jwt from "jsonwebtoken"

const generarJWT =(id)=>{
  return jwt.sign({ id }, process.env.TOKEN_JWT, {
    expiresIn:"1d",  // tiempo de expiracion del token
  });
}

export default generarJWT;