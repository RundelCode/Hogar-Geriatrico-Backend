import express from "express";
import { deleteEmployee, editEmployeeData, getAllEmployees, getEmployeeByID, registerNewEmployee } from "../Controllers/EmployeesController.js";

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/getEmployeeById/:ID", getEmployeeByID);
router.post("/registerNewEmployee", registerNewEmployee);
router.put("/editEmployeeData/:ID", editEmployeeData)
router.delete("/deleteEmployee/:ID", deleteEmployee)

export default router;