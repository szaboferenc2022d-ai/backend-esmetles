import express from 'express';
import dotenv from 'dotenv';
import db from './db.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res)=>{
    res.send("Szerver fut!");
})

app.get("/diakok", async (req, res)=>{
    try{
        const [rows] = await db.query("SELECT * FROM diakok");
        res.status(200).json(rows);
    }
    catch (error){
        console.error(error);
        res.status(500).json({hiba: "Adatbázis hiba történt!"})
    }
} );

app.listen(PORT, (req,res) =>{
    console.log(`Szerver fut: http://localhost:${PORT}`)
})