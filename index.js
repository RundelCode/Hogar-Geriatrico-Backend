import Express from "express";
import https from 'https'
import PatientsRoutes from "./src/Routes/Patients.js"
import EmployeesRoutes from "./src/Routes/Employees.js"
import BalanceRoutes from './src/Routes/Balance.js'
import cors from 'cors';
import { config } from "dotenv";
config();

const app = Express();
const PORT = process.env.PORT || 4000;


const apiKeyValidation = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ error: 'API Key inválida o no proporcionada' });
    }

    next();
};


app.use(Express.json());
app.use(cors())

app.use('/patients', apiKeyValidation, PatientsRoutes);
app.use('/employees', apiKeyValidation, EmployeesRoutes);
app.use('/balance', apiKeyValidation, BalanceRoutes);

app.get("/", (req, res)=>{
    res.send("Server is working...")

})


app.listen(PORT, ()=>{
    console.log(`App Listening at port ${PORT}...`)
})