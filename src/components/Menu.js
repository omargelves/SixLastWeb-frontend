import { Link } from "react-router-dom"


const MenuPrincipal = () => {
    
    return <div class="p-3 mb-2 bg-light text-dark"><center><h1>Proyectos de investigacion</h1></center><br></br>
        <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link"><Link to="/proyecto/listar">Ver Proyectos</Link></a>
        </li>
        <li class="nav-item">
            <a class="nav-link"><Link to="/proyecto">Crear Proyecto</Link></a>
        </li>
        <li class="nav-item">
            <a class="nav-link"><Link to="usuarios">Ver usuarios</Link></a>
        </li>
        <li class="nav-item">
            <a class="nav-link"><Link to="usuario/crear">Crear usuario</Link></a>
        </li>
        <li class="nav-item">
            <a class="nav-link"><Link to="usuario">Activar o Eliminar Usuario</Link></a>
        </li>
        
    </ul></div>
}

export default MenuPrincipal