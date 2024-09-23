import express from "express";
import { deletePatient, editLiableData, editPatientData, getLiableById, getAllLiables, getAllPatients, registerNewLiable, registerNewPatient, getPatientById, getAllRooms, getRoomByNumber, registerNewRoom, editRoomData, deleteLiable, deleteRoom, getAllTreatments, getTratmentByPatientId, registerNewTreatment, editTreatmentData, deleteTreatment } from "../Controllers/PatientsController.js";

const router = express.Router();

router.get("/", getAllPatients);
router.get("/getPatientById/:ID", getPatientById);
router.post("/registerNewPatient", registerNewPatient);
router.put("/editPatientData/:ID", editPatientData)
router.delete("/deletePatient/:ID", deletePatient)
//======================================================
router.get("/getAllLiables", getAllLiables)
router.get("/getLiableById/:ID", getLiableById)
router.post("/registerNewLiable", registerNewLiable);
router.put("/editLiableData/:ID", editLiableData)
router.delete("/deleteLiable/:ID", deleteLiable)
//=====================================================
router.get("/getAllRooms", getAllRooms)
router.get("/getLiableById/:Number", getRoomByNumber)
router.post("/registerNewLiable", registerNewRoom);
router.put("/editLiableData/:ID", editRoomData)
router.delete("/deleteRoom/:ID", deleteRoom)
//=====================================================
router.get("/getAllTreatments", getAllTreatments)
router.get("/getTreatmentByPatientId/:patientID", getTratmentByPatientId)
router.post("/registerNewTreatment", registerNewTreatment);
router.put("/editTreatmentData/:ID", editTreatmentData)
router.delete("/deleteTreatment/:ID", deleteTreatment)

export default router;