import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
// import path from "path";

import { secretaria, departamento, telefone } from "./routes/index.js";

const app = express();

app.use(json());
app.use(morgan("dev")); 
app.use(cors());
app.use(urlencoded({ extended: false })); 

app.use("/api/secretaria", secretaria);
app.use("/api/departamento", departamento);
app.use("/api/telefone", telefone);

export default app;


