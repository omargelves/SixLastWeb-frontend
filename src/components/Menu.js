import { Link } from "react-router-dom"
import { useHistory } from "react-router";

const MenuPrincipal = () => {
    const his = useHistory();
    let token = localStorage.getItem('auth_token')

    const cerrar = () => {
        localStorage.clear()
        his.push("/")
    }
    if ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlc2l0byI6IkxpZGVyIiwiaWF0IjoxNjM5NzE0MjY5LCJleHAiOjE2Mzk3MjE0Njl9.ihldTWlWNLRAFXq0WzkdRDXUP8tqBUJcLk4NpO47Igg") {


    return <div className="p-3 mb-2 bg-light text-dark"><center><h1>Proyectos de investigacion</h1></center><br></br>
        <ul className="nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link"><Link to="/proyecto/listar">Ver Proyectos</Link></a>
        </li>
        <li className="nav-item">
            <a className="nav-link"><Link to="/proyecto">Crear Proyecto</Link></a>
        </li>
        <li className="nav-item">
            <a className="nav-link"><Link to="usuarios">Ver usuarios</Link></a>
        </li>
        <li className="nav-item">
            <a className="nav-link"><Link to="usuario/crear">Crear usuario</Link></a>
        </li>
        <li className="nav-item">
            <a className="nav-link"><Link to="usuario">Activar o Eliminar Usuario</Link></a>
            </li>
            <li className="nav-item">
                <button onClick={cerrar}>Cerrar sesión</button>
            </li>
        
            </ul></div>
    } else {

        his.push("/")
        return <div></div>
    }
}

export default MenuPrincipal