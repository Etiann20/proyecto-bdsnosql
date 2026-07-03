function HeaderUsuarios({ abrirModal }) {

    return (

        <div className="usuarios-header">

            <div>

                <h1>Usuarios</h1>

                <p>
                    Administración de usuarios del sistema
                </p>

            </div>

            <button
                className="btn-primary"
                onClick={abrirModal}
            >
                + Nuevo Usuario
            </button>

        </div>

    );

}

export default HeaderUsuarios;