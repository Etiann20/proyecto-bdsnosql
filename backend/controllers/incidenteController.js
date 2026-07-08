import Incidente from "../models/Incidente.js";
import { registrarAuditoria } from "../services/auditoriaService.js";


// GET
export const obtenerIncidentes = async (req, res) => {

    try {

        const incidentes = await Incidente.find()

            .populate("usuario")

            .populate("tecnico")

            .populate("equipo")

            .populate("evidencias")

            .populate("bitacoras");

        res.status(200).json(incidentes);

    } catch (error) {

        res.status(500).json({

            mensaje: error.message

        });

    }

};

// GET ID
export const obtenerIncidentePorId = async (req, res) => {

    try {

        const incidente = await Incidente.findById(req.params.id)

            .populate("usuario")

            .populate("tecnico")

            .populate("equipo")

            .populate("evidencias")

            .populate("bitacoras");

        if (!incidente) {

            return res.status(404).json({

                mensaje:"Incidente no encontrado"

            });

        }

        res.json(incidente);

    } catch (error) {

        res.status(500).json({

            mensaje:error.message

        });

    }

};

// POST
export const crearIncidente = async (req,res)=>{

    try{

        const incidente=new Incidente(req.body);

        await incidente.save();
        await registrarAuditoria(
            req.usuario.id,
            "Creación de incidente",
            `Se ha creado un nuevo incidente "${incidente.titulo}" con ID: ${incidente._id}.`
        );

        res.status(201).json(incidente);

    }catch(error){

        res.status(400).json({

            mensaje:error.message

        });

    }

};

// PUT
export const actualizarIncidente=async(req,res)=>{

    try{

        const incidente=await Incidente.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true,

                runValidators:true

            }

        );

        if(!incidente){

            return res.status(404).json({

                mensaje:"Incidente no encontrado"

            });

        }

        await registrarAuditoria(
            req.usuario.id,
            "Actualización de incidente",
            `Se ha actualizado el incidente "${incidente.titulo}" con ID: ${incidente._id}.`
        );

        res.json(incidente);

    }catch(error){

        res.status(400).json({

            mensaje:error.message

        });

    }

};

// DELETE
export const eliminarIncidente=async(req,res)=>{

    try{

        const incidente=await Incidente.findByIdAndDelete(req.params.id);

        if(!incidente){

            return res.status(404).json({

                mensaje:"Incidente no encontrado"

            });

        }

        await registrarAuditoria(
            req.usuario.id,
            "Eliminación de incidente",
            `Se ha eliminado el incidente "${incidente.titulo}" con ID: ${incidente._id}.`
        );

        res.json({

            mensaje:"Incidente eliminado correctamente"

        });

    }catch(error){

        res.status(500).json({

            mensaje:error.message

        });

    }

};