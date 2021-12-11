import {
    gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_USUARIO = gql`
    mutation creeUsuario($nombre: String
    $identificacion:Int,
    $clave:String,
    $tipoUsuario: String,
    $correo: String){
        createUser(user:{nombre: $nombre,
    identificacion:$identificacion,
    clave:$clave,
    tipoUsuario: $tipoUsuario,
    correo: $correo})
    }
`;

const CrearUsuario = () => {
    const [creadorDeUsuario] = useMutation(MUTATION_USUARIO)
    let user = {
        nombre: "",
        correo: "",
        identificacion: 0,
        tipoUsuario: "",
        clave: "",
    }

    return (<div><h1>Crear Usuario</h1>
        <form onSubmit={e => {
            e.preventDefault();
            creadorDeUsuario({
                variables: {
                    nombre: user.nombre.value,
                    correo: user.correo.value,
                    identificacion: parseInt(user.identificacion.value),
                    tipoUsuario: user.tipoUsuario.value,
                    clave: user.clave.value
                }
            })
        }} >
            <div>
                <label>Nombre</label>
                <input ref={nombre => user.nombre= nombre} placeholder="Nombre" />
            </div>
            <div>
                <label>correo </label>
                <input ref={correo => user.correo = correo} placeholder="correo" />
            </div>
            <div>
                <label>identificacion </label>
                <input ref={identificacion => user.identificacion = identificacion} placeholder="identificacion" />
            </div>
            <div>
                <label>tipoUsuario </label>
                <input ref={tipoUsuario => user.lider = tipoUsuario} placeholder="tipoUsuario" />
            </div>
            <div>
                <label>clave </label>
                <input ref={clave => user.clave = clave} placeholder="clave" />
            </div>
            <div><button type="submit">Registrar Usuario</button></div>
        </form>
    </div>)
}

export default CrearUsuario