import { useState } from "react";
import "./formulario.css";
import { Lista } from "./lista";

export const Formulario = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [estudiante, setEstudiante] = useState({
        INE: "",
        nombre: "",
        apellido: "",
        telefono: "",
        correo: ""
    });

    const onChange = (e) => {
        setEstudiante({
            ...estudiante,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!estudiante.INE || !estudiante.nombre || !estudiante.apellido || !estudiante.telefono || !estudiante.correo) {
            alert("Por favor, rellene todos los campos");
            return
        }
        setEstudiantes([...estudiantes, estudiante]);

        reset();
    };

    const reset = () => {
        setEstudiante({
            INE: "",
            nombre: "",
            apellido: "",
            telefono: "",
            correo: ""
        });
    };

    return (
        <div className="container">
            <div>
                <form onSubmit={onSubmit}>
                    <h1>Formulario de Estudiantes</h1>
                    <label>
                        Número de INE:
                        <input type="text" name="INE" value={estudiante.INE} onChange={onChange} />
                    </label>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={estudiante.nombre} onChange={onChange} />
                    </label>
                    <label>
                        Apellido Paterno:
                        <input type="text" name="apellido" value={estudiante.apellido} onChange={onChange} />
                    </label>
                    <label>
                        Teléfono:
                        <input type="text" name="telefono" value={estudiante.telefono} onChange={onChange} />
                    </label>
                    <label>
                        Correo:
                        <input type="text" name="correo" value={estudiante.correo} onChange={onChange} />
                    </label>


                    <button type="submit">Enviar</button>
                    <button type="reset" onClick={reset}>Limpiar</button>
                </form>
            </div>

            <div>
                <Lista estudiantes={estudiantes} />
            </div>
        </div>
    )
}