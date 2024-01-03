import prisma from "../../db/index.js";
import AppError from "../../utils/AppError.js";

class SecretariaController {

    async createSecretaria(req, res){
        const { body } = req

        const createSecretaria = await prisma.secretaria.create({
            data: {
                ...body
            }  
        }); 

        return res.status(201).json({ content: createSecretaria })
    }

    async listarSecretariaId(req, res) {
        const { params } = req

        const buscarSecretariaId = await prisma.secretaria.findFirst({
            where: {
                id: Number(params.id)
            }
        });

        if(!buscarSecretariaId){
            throw new AppError("Secretaria não encontrada");
        }

        return res.status(200).json({ content: buscarSecretariaId })
    }

    async listarSecretaria(req, res){
        const listarTodasSecretarias = await prisma.secretaria.findMany({
            where: {
                situacao: "ATIVADO"
            }
        });

        return res.status(200).json({ content: listarTodasSecretarias })
    }
 
    async atualizarSecretaria(req, res) { 
        const { body, params } = req

        const buscarSecretariaId = await prisma.secretaria.findUnique({
            where: {
                id: Number(params.id)
            }
        });

        if(!buscarSecretariaId){
            throw new AppError('Secretaria não encontrada')
        }

        const atualizarSecretaria = await prisma.secretaria.update({
            where: {
                id: Number(params.id) 
            }, 
            data: { 
                ...body
            }
        });
 
        return res.status(201).json({ content: atualizarSecretaria })
    }
}

export default SecretariaController;