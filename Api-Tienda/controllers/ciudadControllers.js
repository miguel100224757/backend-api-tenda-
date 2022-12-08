//  importamos el modelo ciudad
import Ciudad from "../model/Ciudad.js";


const agregar = async(req, res)=>{
    // evitar ciudades con el nombre duplicado 
   const {nombreCiudad}= req.body;
   const existeCiudad = await Ciudad.findOne({nombreCiudad});
   
   if (existeCiudad){
    const error =new Error("rol ya esta registrado en la base de datos.");
    return res.status(400).json({msg: error.message, creado:'no'});
   }
    
    try {
        const ciudad= new Ciudad(req.body);
        const ciudadAlmacenar = await ciudad.save();
        res.json({ body: ciudadAlmacenar, creado:"si", msg:"registro creado"})
     
    } catch (error) {
       console.log(error)

    }
 }
 
 const listar =async (req, res)=>{
    const ciudad = await Ciudad.find();
    res.json(ciudad);
 }
 
 const eliminar = async(req, res)=>{
     
      // resivir los parametros de la url
      const { id } = req.params;

      // validar si existe el registro a eliminar 
      const ciudad = await Ciudad.findById(id);
       
 
      if (!ciudad){
         const error = new Error("registro no encontrado");
         return res.status(404).json({msg: error.message, ok:"no"});
      }
      try {
         await ciudad.deleteOne();
         res.status(404).json({ msg:"registro eliminado correctamente", ok:"si"})
      } catch (error) {
         console.log(error)
      }
 }
 
 const editar =async (req, res)=>{
    
       // resivir los parametros de la url
    const { id } = req.params;

    // validar si existe el registro a editar
    const ciudad = await Ciudad.findById(id);
     //console.log(rol)

    if (!ciudad){
       const error = new Error("registro no encontrado");
       return res.status(404).json({msg: error.message, ok:"no"});
    }

    // capturar los datos enviados desde el formulario
    rol.nombreCiudad = req.body.nombreCiudad || ciudad.nombreCiudad;
    rol.estadoCiudad = req.body.estadoCiudad || ciudad.estadoCiudad;

    try {
        const ciudadGuadado = await ciudad.save();
       res.json({ body: ciudadGuadado, ok:"si"})
    } catch (error) {
       console.log(error)
    }
 }
 
 const listaUno = async(req, res)=>{
     console.log('estoy en el controlador metodo listaUno');
      // resivir los parametros de la url
    const { id } = req.params;

    // validar si existe el registro a editar
    const ciudad = await Ciudad.findById(id);
     //console.log(rol)

    if (!ciudad){
       const error = new Error("registro no encontrado");
       return res.status(404).json({msg: error.message, ok:"no"});
    }
    
    res.json(ciudad);
 }
 
 export {
     agregar,
     listar,
     eliminar,
     editar,
     listaUno
 }
