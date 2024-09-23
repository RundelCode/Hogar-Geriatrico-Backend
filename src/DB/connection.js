import mysql from 'mysql'
import { config } from 'dotenv';
config();


const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASS;
const DB_DATABASE = process.env.DB_DATABASE;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

connection.connect((err)=>{
    if(err){
        console.err(`Connection failed with error: ${err}.`);
    }
    else{
        console.log("Connection succesfully done.")
    }
})

export default connection;