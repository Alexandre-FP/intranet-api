import prisma from "../../db/index.js"

class CargoController {
    async createCargo(req, res){
        const { body } = req

        const createCargo = await prisma.cargo.create({
            data: {
                ...body
            }
        });

        return res.status(201).json({ content: createCargo })
    }

    async listarCargo(req, res){
        const listarCargo = await prisma.cargo.findMany({
            where: {
                situacao: 'ATIVADO'
            }
        });

        return res.status(200).json({ content: listarCargo });
    }
}

export default CargoController;