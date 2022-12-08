import mongoose from "mongoose";
const categoriaSchema = mongoose.Schema({
    nombreCategora:{
        type:String,
        requiere: true,
        trim:true
    }
},{
    timestamps:true
}
)

const Categoria= mongoose.model("Categoria", categoriaSchema);
export default Categoria