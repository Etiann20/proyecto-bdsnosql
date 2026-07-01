import "./../styles/dashboard.css";

function StatCard({ titulo, valor, icono }) {
    return (
        <div className="stat-card">

            <div>

                <h3>{titulo}</h3>

                <h1>{valor}</h1>

            </div>

            <div className="card-icon">

                {icono}

            </div>

        </div>
    );
}

export default StatCard;