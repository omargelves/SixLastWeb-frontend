import {
    useQuery,
    gql
} from "@apollo/client";

const Usuarios = () => {
    const USUARIOS = gql`
  query{  usuarios{nombre,   identificacion,  correo,    tipoUsuario,    estado}}
`;
    const { loading, error, data } = useQuery(USUARIOS)
    if (loading) return "<h1>Cargando</h1>"
    const datosTabla = data.usuarios.map(({ nombre, identificacion, correo, tipoUsuario, estado }) => (
        <tbody>
            <tr>
                <td>{nombre}</td>
                <td>{identificacion}</td>
                <td>{correo}</td>
                <td>{tipoUsuario}</td>
                <td>{estado}</td>
            </tr>
        </tbody>

    ));

    return (
        <div><a href="/menu" class="link">Menu</a>
            <br /><center><h1>Listado de usuarios</h1></center>
        <table className="table table-success table-stripede">          
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Identificacion</th>
                    <th>Correo</th>
                    <th>Tipo de usuario</th>
                    <th>Estado</th>
                </tr>
            </thead>
                
            {datosTabla}
            </table></div>
        
    ) 
}

export default Usuarios