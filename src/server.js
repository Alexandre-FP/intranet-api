import app from "./app";

const PORT = process.env.PORT_DEV; 

app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));   