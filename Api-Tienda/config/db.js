import mongoose, { connect } from "mongoose"

const conectarDB = ()=>{ // funcones asincronicas async y await //
    const urlConexion = String(process.env.MONGO_URI);
    connect(urlConexion)
        .then(con => {
            console.log(`conexion establecida con la base: ${urlConexion}`);
        })
        .catch(error => {
            console.log(error);
        });
};

export default conectarDB;

