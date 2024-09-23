import express from "express";
import { deleteExpense, deleteIncome, editExpenseData, editIncomeData, getAllBalances, getAllExpenses, getAllIncomes, getBalanceById, getExpenseByBalanceId, getExpenseById, getIncomeByBalanceId, getIncomesById, registerNewBalance, registerNewExpense, registerNewIncome } from "../Controllers/BalanceController.js";

const router = express.Router();

router.get("/", getAllBalances);
router.get("/getBalanceById/:ID", getBalanceById);
router.post("/registerNewBalance", registerNewBalance);
//=======================================================
router.get("/getAllIncomes", getAllIncomes);
router.get("/getIncomeById/:ID", getIncomesById);
router.get("/getIncomeByBalanceId/:ID", getIncomeByBalanceId);
router.post("/registerNewIncome", registerNewIncome);
router.put("/editIncomeData/:ID", editIncomeData),
router.delete("/deleteIncome/:ID", deleteIncome )
//=======================================================
router.get("/getAllExpenses", getAllExpenses);
router.get("/getExpenseByID/:ID", getExpenseById);
router.get("/getExpensesById/:ID", getExpenseByBalanceId );
router.post("/registerNewExpense", registerNewExpense);
router.put("/edirExpenseData/:ID", editExpenseData),
router.delete("/deleteExpense/:ID", deleteExpense ) 

export default router;