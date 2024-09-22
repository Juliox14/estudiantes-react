import "./lista.css";
export const Lista = ({ estudiantes }) => {
    const limpiar = () => {
        window.location.reload();
    };
    return (
        <div className="lista-container">
            <h1>Lista de Estudiantes</h1>
            <div className="lista">
                {estudiantes.map((estudiante, index) => (
                    <div key={index} className="estudiante-card">
                        <h2>Estudiante {index + 1}</h2>
                        <p>Nombre: {estudiante.nombre}</p>
                        <p>Apellido: {estudiante.apellido}</p>
                        <p>INE: {estudiante.INE}</p>
                        <p>Teléfono: {estudiante.telefono}</p>
                        <p>Correo: {estudiante.correo}</p>
                    </div>
                ))}
            </div>
            <button onClick={limpiar}>Limpiar</button>
        </div>
    );
};