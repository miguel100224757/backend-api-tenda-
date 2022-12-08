//  importamos el modelo role
import Rol from "../model/Rol.js";


const agregar = async (req, res)=>{
   

   // evitar roles con el nombre duplicado 
   const {nombreRol}= req.body;
   const existeRol = await Rol.findOne({nombreRol});
   
   if (existeRol){
    const error =new Error("rol ya esta registrado en la base de datos.");
    return res.status(400).json({msg: error.message, creado:'no'});
   }

   try {
       const rol = new Rol(req.body);
       const rolAlmacenar = await rol.save();
       res.json({ body: rolAlmacenar, creado:"si", msg:"registro creado correctamente"})
    
   } catch (error) {
      console.log(error)
   } 
}  


const listar = async (req, res)=>{
    const roles = await Rol.find();
    res.json(roles);
}

const eliminar =async (req, res)=>{
     // resivir los parametros de la url
     const { id } = req.params;

     // validar si existe el registro a eliminar 
     const rol = await Rol.findById(id);
      //console.log(rol)

     if (!rol){
        const error = new Error("registro no encontrado");
        return res.status(404).json({msg: error.message, ok:"no"});
     }
     try {
        await rol.deleteOne();
        res.status(404).json({ msg:"registro eliminado correctamente", ok:"si"})
     } catch (error) {
        console.log(error)
     }
}

const editar =async (req, res)=>{
    // resivir los parametros de la url
    const { id } = req.params;

    // validar si existe el registro a editar
    const rol = await Rol.findById(id);
     //console.log(rol)

    if (!rol){
       const error = new Error("registro no encontrado");
       return res.status(404).json({msg: error.message, ok:"no"});
    }

    // capturar los datos enviados desde el formulario
    rol.nombreRol = req.body.nombreRol || rol.nombreRol;
    rol.estadoRol = req.body.estadoRol || rol.estadoRol;

    try {
        const rolGuadado = await rol.save();
       res.json({ body: rolGuadado, ok:"si"})
    } catch (error) {
       console.log(error)
    }
}

const listaUno = async(req, res)=>{
    // resivir los parametros de la url
    const { id } = req.params;

    // validar si existe el registro a editar
    const rol = await Rol.findById(id);
     //console.log(rol)

    if (!rol){
       const error = new Error("registro no encontrado");
       return res.status(404).json({msg: error.message, ok:"no"});
    }
    
    res.json(rol);
}
const comboRoles = async (req, res) => {
   const roles = await Rol.find({ estadoRol: 1 });
   res.json(roles);
}

export {
    agregar,
    listar,
    eliminar,
    editar,
    listaUno,
    comboRoles
};