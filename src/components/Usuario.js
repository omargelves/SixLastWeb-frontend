import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const Usuario = ({ user }) => {

    const ACTIVAR_USUARIO = gql`
        mutation activeUser($identificacion:Int){
            activeUser(identificacion:$identificacion)
        }
    `
    const ELIMINAR_USUARIO = gql`
        mutation deleteUser($ident:Int){
            deleteUser(ident:$ident)
        }
    `
    const [activar] = useMutation(ACTIVAR_USUARIO)
    const [eliminar] = useMutation(ELIMINAR_USUARIO)


    const activarUser = () => {
        activar({ variables: { identificacion: user.identificacion } })
    }

    const eliminarUser = () => {
        eliminar({ variables: { ident: user.identificacion } })
    }

    return <tr>
        <td>{user.nombre}</td>
        <td>{user.identificacion}</td>
        <td>{user.estado}</td>
        <td>{user.correo}</td>
        <td>{user.tipoUsuario}</td>

        <td><button className="btn btn-success" onClick={activarUser}>Activar</button></td>
        <td><button className="btn btn-danger" onClick={eliminarUser}>Eliminar</button></td>
    </tr>
        
    
}

export default Usuario