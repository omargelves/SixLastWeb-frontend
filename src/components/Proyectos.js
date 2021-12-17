import {
  useQuery,
  gql
} from "@apollo/client";
import { Link } from "react-router-dom";


const Proyectos = () => {
  const PROYECTOS = gql`
  query  {
    proyectos {
      lider
      nombre
      presupuesto
      estado
      fase
      descripcion
      _id
    }
  }
`;
  

  const { loading, error, data } = useQuery(PROYECTOS, {
    context: {
      header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJMaWRlciIsImlhdCI6MTYzOTYyNzk1NywiZXhwIjoxNjM5NjM1MTU3fQ.bZqZFLOvrQvc8Ikt0I12eCBqkkQ-oqD4RlDrml2eZnE"
      }
    }
  })
  if (loading) return "<h1>Cargando</h1>"
  if (error) return "<h1>Problemas con el server de graphql</h1>"

  const datosTabla = data.proyectos.map(({ lider, nombre, presupuesto, estado, fase, descripcion,_id }) => (
    
      
    <tbody>

      <tr key={nombre}>
        <td>{nombre}</td>
        <td>{lider}</td>
        <td>{presupuesto}</td>
        <td>{estado}</td>
        <td>{fase}</td>
        <td>{descripcion}</td>
        <td><Link to={`/proyecto/${nombre}`}>editar</Link> </td>
      </tr>
    </tbody>
    
  ));

  return (
    <div>
      <a href="/menu" className="link">Menu</a><center><h1>Listado de proyectos</h1></center>

      <table className="table table-success table-stripede" >    
        <thead >
          <tr>
            <th>Nombre Proyecto</th>
            <th>Lider</th>
            <th>Presupuesto</th>
            <th>Estado</th>
            <th>Fase</th>
            <th>Descripcion</th>
            <th>Editar</th>
          </tr>
        </thead>

        {datosTabla}
       
      </table>
      {/*} <button onClick={autenticar}>Autenticar</button>valor:{autenticado}*/}
      
    </div>
)}

export default Proyectos