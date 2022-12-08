import mongoose from "mongoose";
const pedidoSchema = mongoose.Schema({
    idCliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
        require:true,
        trim:true
    },
    fechaPedido:{
        type:Date,
        requiere: true,
        trim:true
    },
    numeroPedido:{
        type:String,
        requiere: true,
        trim:true
    },
    estadoPedido:{
        type:Number,
        requiere: true,
        trim:true
    },
    totalPedido:{
        type:Number,
        requiere: true,
        trim:true
    },
    IdTransaccion:{
        type:String,
        requiere: true,
        trim:true
    }
},{
    timestamps:true
}
)

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido