import "../../styles/incidentes.css";

function IncidentFilters() {
    return (
        <div className="filters">

            <select>
                <option>Todos los estados</option>
                <option>Pendiente</option>
                <option>En proceso</option>
                <option>Resuelto</option>
            </select>

            <select>
                <option>Todas las prioridades</option>
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
                <option>Crítica</option>
            </select>

        </div>
    );
}

export default IncidentFilters;