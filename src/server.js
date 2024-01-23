import app from "./app.js"; 

app.listen({ port: process.env.PORT_DEV }, () => { 
    console.log(`✅ Servidor rodando na porta ${ process.env.PORT_DEV }`)
});    