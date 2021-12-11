import {
  useQuery,
  gql
} from "@apollo/client";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [autenticado,setAutenticado]=useState("NO")
    const autenticar = () => {
    setAutenticado("SI")
  }

  const { loading, error, data } = useQuery(PROYECTOS)
  if (loading) return "<h1>Cargando</h1>"
      

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
       
      </table><button onClick={autenticar}>Autenticar</button>valor:{autenticado}</div>
)}

export default Proyectos