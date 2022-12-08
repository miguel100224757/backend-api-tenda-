
import Usuario from "../model/Usuario.js";
import generarJWT from "../helpers/generalJWT.js";

const agregar = async(req, res)=>{
 
// evitar usuarios con el nombre duplicado 

const {usuarioAcceso}= req.body;
const existeUsuario = await Usuario.findOne({usuarioAcceso});

if (existeUsuario){
 const error =new Error("usuario ya esta registrado en la base de datos.");
 return res.status(400).json({msg: error.message, creado:'no'});
}

    try {
        const usuario = new Usuario(req.body);
       const usuarioAlmacenar = await  usuario.save();
       res.json({ body: usuarioAlmacenar, creado:"si"})
    
    } catch (error) {
        console.log(error)
    } 
 }
 
 const listar = async(req, res)=>{
    const usuario = await Usuario.find().populate('idRol',
    {nombreRol:1,
    _id:0}).populate('idCiudad',
    {nombreCiudad:1,
    _id:0});;
    res.json(usuario);
 }
 
 const eliminar = async(req, res)=>{
     console.log('estoy en el controlador metodo elminar usuario'); 
 }
 
 const editar = async(req, res)=>{
     console.log('estoy en el controlador metodo editar usuario');
 }
 
 const listaUno = async(req, res)=>{
     console.log('estoy en el controlador metodo listaUno usuario');
 }

 
 const autenticar = async (req, res)=>{

    const {usuarioAcceso, claveAcceso} = req.body

    // comprobar si el usuario existe
    const usuario = await Usuario.findOne({usuarioAcceso});
    if (!usuario) {
        const error = new Error("El usuario no existe.")
        return res.status(404).json({msg: error.message, ok:"NO_EXISTE"});
    }
 // comprobar la contraseña
 if (await usuario.comprobarClave(claveAcceso)){
    res.json({
       _id: usuario._id,
       nomnbreUsuario: usuario.nomnbreUsuario,
       usuarioAcceso: usuario.usuarioAcceso,
       tokenJWT:generarJWT(usuario._id)
    });
} else{
        const error = new Error("clave incorrecta.");
        return res.status(404).json({msg: error.message, ok:"CLAVE_ERROR"}) 
    } 
} 

const crearCuenta = async(req, res)=>{
 
    // evitar usuarios con el nombre duplicado 
    
    const {usuarioAcceso}= req.body;
    const existeUsuario = await Usuario.findOne({usuarioAcceso});
    
    if (existeUsuario){
     const error =new Error("usuario ya esta registrado en la base de datos.");
     return res.status(400).json({msg: error.message, creado:'NO'});
    }
    
        try {
            const usuario = new Usuario(req.body);
           const usuarioAlmacenar = await  usuario.save();
           res.json({ body: usuarioAlmacenar, creado:"si"})
        
        } catch (error) {
            console.log(error)
        } 
     }


 export {
     agregar,
     listar,
     eliminar,
     editar,
     listaUno,
     autenticar,
     crearCuenta
 }
 
