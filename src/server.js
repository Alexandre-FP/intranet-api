import app from "./app";

const PORT = process.env.PORT_DESENVOLVIMENTO;

app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));  


  