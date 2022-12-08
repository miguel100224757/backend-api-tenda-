import mongoose from "mongoose";

import bcrypt from "bcrypt";

// construccion del esquema //
const usuarioSchema = mongoose.Schema({
    // propiedades objetos js.
    idRol:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Rol",
         require:true,
         trim:true
      },
    idCiudad:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Ciudad",
        require:true,
        trim:true
      },
    nombreUsuario:{
        type:String,
        requiere: true,  // si es obligatorio
        trim:true // para quitar espacios de la cadena
    },
    apellidoUsuario:{
        type:String,
        requiere: true,
        trim:true
    },
    tipodocUsuario:{
        type:Number,
        requiere: false,
        trim:true
    },
    documentoUsuario:{
        type:Number,
        requiere: false,
        trim:true
    },
    celularUsuario:{
        type:Number,
        requiere: true,
        trim:true
    },
    correoUsuario:{
        type:String,
        requiere: true,
        trim:true
    },
    usuarioAcceso:{
        type:String,
        requiere: true,
        trim:true,
        unique:true
    },
    claveAcceso:{
        type:String,
        requiere: true,
        trim:true
    },
    estadoUsuario:{
        type:Number,
        requiere: true,
        trim:true
    },
    direccionUsuario:{
        type:String,
        requiere: false,
        trim:true
    }
},{
    timestamps:true  // campo automatico de fecha de creacion y actualizacion
}
)


usuarioSchema.pre('save', async function(next){
    if (!this.isModified("claveAcceso")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.claveAcceso = await bcrypt.hash(this.claveAcceso, salt)
})

usuarioSchema.methods.comprobarClave = async function(claveFormulario){
  return await bcrypt.compare(claveFormulario, this.claveAcceso);
} 

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario