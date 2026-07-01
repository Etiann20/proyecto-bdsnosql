import { FiSearch } from "react-icons/fi";
import "../../styles/incidentes.css";

function SearchBar() {
    return (
        <div className="search-container">

            <FiSearch />

            <input
                type="text"
                placeholder="Buscar incidente..."
            />

        </div>
    );
}

export default SearchBar;