import app from "./app.js";

const PORT = process.env.PORT_DEV; 

app.listen({ port: PORT }, console.log(`✅ Servidor rodando na porta ${PORT}`));   