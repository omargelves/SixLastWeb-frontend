import {
    gql, useMutation
} from "@apollo/client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const MUTATION_PROYECTO = gql`
    mutation creeProyecto($objGe:String,$presupuesto:Int, $nombreProyecto: String, $lider:String, $descripcion:String){
        createProject(project:{nombre:$nombreProyecto,lider:$lider,objetivosGenerales:$objGe,presupuesto:$presupuesto,descripcion:$descripcion})
    }
`;

const CrearProyecto = () => {
    const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
        nombreProyecto: "",
        descripcion: "",
        objetivos: "",
        lider: "",
        presupuesto: 0,
    }

    return <div className="p-3 mb-2 bg-info text-dark"><div ><a href="/menu" class="link">Menu</a>
        <h1>Crear Proyecto</h1>
        <form  onSubmit={e => {
            e.preventDefault();
            creadorDeProyecto({variables:{
                descripcion: project.descripcion.value,
                objGe: project.objetivos.value,
                presupuesto: parseInt(project.presupuesto.value),
                nombreProyecto: project.nombreProyecto.value,
                lider: project.lider.value
            }})
        }} >
                <div className="mb-3">
                <label >Nombre Proyecto: </label>
                <input ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
            </div>
            <div className="mb-3">
                <label >Descripcion: </label>
                <input ref={descripcion => project.descripcion = descripcion} placeholder="Descripcion" />
            </div>
            <div className="mb-3">
                <label>Objetivos: </label>
                <input ref={objetivos => project.objetivos = objetivos} placeholder="Objetivos" />
            </div>
            <div className="mb-3">
                <label>Lider: </label>
                <input ref={lider => project.lider = lider} placeholder="Lider" />
            </div>
            <div className="mb-3">
                <label>Presupuesto: </label>
                <input ref={presupuesto => project.presupuesto = presupuesto} placeholder="Presupuesto" />
            </div>
            <div className="mb-3"><button className="btn btn-success" type="submit">Registrar Proyecto</button></div>
            
            <a href="/proyecto/listar" class="btn btn-primary">Lista de proyectos</a>
        </form>
    </div></div>
   
    
}

export default CrearProyecto