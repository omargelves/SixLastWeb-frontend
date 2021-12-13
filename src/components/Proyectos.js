import {
  useQuery,
  gql
} from "@apollo/client";
import { useState } from "react";



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
    }
  }
`;
  const [autenticado, setAutenticado] = useState("NO")
  const autenticar = () => {
    setAutenticado("SI")
  }

  const { loading, error, data } = useQuery(PROYECTOS, {
    context: {
      header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJMaWRlciIsImlhdCI6MTYzOTM0MDM4NiwiZXhwIjoxNjM5MzQ3NTg2fQ.0HRKcftgu3Uc9T-ZyWK_sunlH8aV4A9-kDB_4q3aD9Y"
      }
    }
  })
  if (loading) return "<h1>Cargando</h1>"
  if (error) return "<h1>Problemas con el server de graphql</h1>"

  const datosTabla = data.proyectos.map(({ lider, nombre, presupuesto, estado, fase, descripcion }) => (
    
      
    <tbody>

      <tr>
        <td>{nombre}</td>
        <td>{lider}</td>
        <td>{presupuesto}</td>
        <td>{estado}</td>
        <td>{fase}</td>
        <td>{descripcion}</td>
      </tr>
    </tbody>
    
  ));

  return (
    <div><center><h1>Listado de proyectos</h1></center>
      <table className="table table-success table-stripede" >
      
      
      
        <thead >
          <tr>
            <th>Nombre Proyecto</th>
            <th>Lider</th>
            <th>Presupuesto</th>
            <th>Estado</th>
            <th>Fase</th>
            <th>Descripcion</th>
          </tr>
        </thead>

        {datosTabla}
       
      </table>
      {/*} <button onClick={autenticar}>Autenticar</button>valor:{autenticado}*/}
    </div>
)}

export default Proyectos