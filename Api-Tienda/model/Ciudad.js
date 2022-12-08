import mongoose, { Schema } from "mongoose";

const ciudadSchema = mongoose.Schema({
    nombreCiudad:{
        type: String,
        requiere: true,
        trim:true,
        unique: true
    },
    estadoCiudad:{
        type: Number,
        requiere: true,
        trim:true
    }
},{
    timestamps:true
})

const Ciudad = mongoose.model("Ciudad", ciudadSchema)

export default Ciudad