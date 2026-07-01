import "../styles/header.css";

function Header() {
    const fecha = new Date().toLocaleDateString("es-CL", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return (
        <header className="header">

            <div>

                <h2>Dashboard</h2>

                <span>{fecha}</span>

            </div>

            <div className="header-user">

                <div className="user-circle">
                    A
                </div>

                <div>

                    <h4>Administrador</h4>

                    <span>SGIC</span>

                </div>

            </div>

        </header>
    );
}

export default Header;