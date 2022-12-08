import mongoose from "mongoose";
const productoSchema = mongoose.Schema({
    idCategoria:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categoria",
        require:true,
        trim:true
    },
    nombreProducto:{
        type:String,
        requiere: true,
        trim:true
    },
    referenciaProducto:{
        type:String,
        requiere: true,
        trim:true
    },
    precioVenta:{
        type:Number,
        requiere: true,
        trim:true
    },
    descripcionProducto:{
        type:String,
        requiere: true,
        trim:true
    },
    cantidadProducto:{
        type:Number,
        requiere: true,
        trim:true
    },
    codigoImagen:{
        type:String,
        requiere: true,
        trim:true
    },
    unidadMedida:{
        type:Number,
        requiere: true,
        trim:true
    },
    estadoProducto:{
        type:Number,
        requiere: true,
        trim:true
    }
},{
    timestamps:true
}
)

const Producto = mongoose.model("Producto", productoSchema);
export default Producto