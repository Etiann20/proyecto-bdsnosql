import { FiPlus } from "react-icons/fi";
import "../../styles/incidentes.css";

function NewIncidentButton() {
    return (
        <button className="new-btn">

            <FiPlus />

            Nuevo incidente

        </button>
    );
}

export default NewIncidentButton;