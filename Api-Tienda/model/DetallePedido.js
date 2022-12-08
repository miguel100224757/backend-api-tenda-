import mongoose from "mongoose";
const detallePedidoSchema = mongoose.Schema({
    idPedido:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Pedido",
        require:true,
        trim:true
    },
    idProducto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Producto",
        require:true,
        trim:true
    },
    cantidadPedido:{
        type:Number,
        requiere: true,
        trim:true
    },
    valorUnitario:{
        type:Number,
        requiere: true,
        trim:true
    },
    totalDetalle:{
        type:Number,
        requiere: true,
        trim:true
    }
},{
    timestamps:true
}
)

const DetallePedido = mongoose.model("DetallePedido", detallePedidoSchema);
export default DetallePedido