# Sistema de Gestión de Incidentes de Ciberseguridad (SGIC)

## Descripción

El Sistema de Gestión de Incidentes de Ciberseguridad (SGIC) es una aplicación web desarrollada para administrar incidentes de seguridad informática dentro de una organización.

El sistema permite gestionar usuarios, técnicos, equipos, evidencias e incidentes mediante una arquitectura cliente-servidor, utilizando una base de datos NoSQL en MongoDB Atlas.

Además, incorpora autenticación mediante JWT, control de acceso por roles, auditoría de acciones y un historial de cambios para cada incidente.

---

## Tecnologías utilizadas

### Frontend

- React
- Vite
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- express-validator

---

## Arquitectura

El proyecto está compuesto por dos partes:

- Frontend desarrollado con React.
- Backend desarrollado con Node.js y Express.

La comunicación entre ambos se realiza mediante una API REST utilizando formato JSON.

La información se almacena en MongoDB Atlas utilizando Mongoose como ODM.

---

## Funcionalidades

El sistema permite:

- Inicio de sesión mediante JWT.
- Gestión de usuarios.
- Gestión de técnicos.
- Gestión de equipos.
- Gestión de evidencias.
- Gestión de incidentes.
- Dashboard con información general.
- Auditoría de acciones.
- Historial de cambios por incidente.
- Control de acceso mediante roles.

---

## Estructura del proyecto

```
proyecto-bdsnosql
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── validators
│   └── server.js
│
├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── styles
│   └── App.jsx
│
├── public
└── package.json
```

---

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/Etiann20/proyecto-bdsnosql.git
```

---

### Instalar dependencias del frontend

```bash
npm install
```

---

### Instalar dependencias del backend

```bash
cd backend
npm install
```

---

## Variables de entorno

### Backend

Crear un archivo `.env` dentro de la carpeta **backend** con la siguiente información:

```env
PORT=5000
MONGODB_URI=tu_cadena_de_conexion
JWT_SECRET=tu_clave_secreta
```

### Frontend

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:5000/api
```

Para producción:

```env
VITE_API_URL=https://sgic-api-qimk.onrender.com/api
```

---

## Ejecución

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
npm run dev
```

---

## Despliegue

### Frontend

Vercel:

https://proyecto-bdsnosql-uzkh.vercel.app/

---

### Backend

Render:

https://sgic-api-qimk.onrender.com

---

### Base de datos

MongoDB Atlas

---

## Repositorio

GitHub:

https://github.com/Etiann20/proyecto-bdsnosql

---

## Integrantes

- Etiann Beiza.
- Javier Sepúlveda.
- Fabian Maldonado.
---

## Estado del proyecto

Proyecto desarrollado para la asignatura **Bases de Datos No Estructurados**.

La aplicación se encuentra completamente funcional e integra autenticación, operaciones CRUD, auditoría, historial de incidentes y despliegue en la nube.