import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Usuario from "./Usuario";

const ListaUsuarios = () => {
    const USUARIOS = gql`
  query{  usuarios{nombre,   identificacion,  correo,    tipoUsuario,    estado}}
`;
    const { loading, error, data } = useQuery(USUARIOS);
    
    if (loading) {
        return <div>
            <p>Estoy cargando</p>
        </div>
    }

    if (error) {
        return <div>
        <p>Hubo un error</p>
        </div>
    }
    return (
        <div><a href="/" class="link">Menu</a>
            <br /><center><h1>Listado de usuarios</h1></center>
            <table className="table table-success table-stripede">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Identificacion</th>
                        <th>Correo</th>
                        <th>Tipo de usuario</th>
                        <th>Estado</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {data.usuarios.map((usuario) => <Usuario user={usuario} />
                    )}
                </thead>
                
            </table></div>
    )
}

export default ListaUsuarios
