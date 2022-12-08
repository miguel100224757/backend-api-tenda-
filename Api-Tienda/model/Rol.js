import mongoose from "mongoose";
const rolSchema = mongoose.Schema({
    nombreRol:{
        type:String,
        requiere: true,
        trim:true,
        
    },
    estadoRol:{
        type:Number,
        requiere: true,
        trim:true
    }
},{
    timestamps:true
});

const Rol = mongoose.model("Rol", rolSchema);
export default Rol;