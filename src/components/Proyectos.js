import {
  useQuery,
  gql
} from "@apollo/client";

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
  const { loading, error, data } = useQuery(PROYECTOS)
  if (loading) return "<h1>Cargando</h1>"
      

  const datosTabla = data.proyectos.map(({ lider, nombre, presupuesto, estado, fase, descripcion }) => (
    
      
      <tbody>

      <tr>
        <td>{lider}</td>
        <td>{nombre}</td>
        <td>{presupuesto}</td>
        <td>{estado}</td>
        <td>{fase}</td>
        <td>{descripcion}</td>
        </tr>
      </tbody>
    
  ));

  return (
    <table border="1">
      
      <caption><h2>LISTADO DE PROYECTOS</h2></caption>
    <thead>
      <tr>
        <th>Lider</th>
        <th>Nombre Proyecto</th>
        <th>Presupuesto</th>
        <th>Estado</th>
        <th>Fase</th>
        <th>Descripcion</th>
      </tr>
    </thead>

    {datosTabla}
  </table>
)}

export default Proyectos