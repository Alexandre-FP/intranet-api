import prisma from "../../db/index.js";

class DepartamentoController {
  async createDepartamento(req, res){
    const { body } = req;

    const createDepartamento = await prisma.departamento.create({
      data: {
        ...body
      }
    });

    return res.status(201).json({ content: createDepartamento });
  }

  async listarDepartamento(req, res){
    const listarDepartamento = await prisma.departamento.findMany();

    return res.status(200).json({ content: listarDepartamento })
  }
}

export default DepartamentoController;