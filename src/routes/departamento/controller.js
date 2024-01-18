import prisma from "../../db/index.js";
import AppError from "../../utils/AppError.js";

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
    const listarDepartamento = await prisma.departamento.findMany({
      include: {
        secretaria: {
          select: {
            nome: true,
            sigla: true
          }
        },
      }, 
      where: {
        situacao: "ATIVADO"
      }
    });

    return res.status(200).json({ content: listarDepartamento });
  }

  async departamentoDesativar(req, res){
    const { params, body } = req

    const departamentoId = await prisma.departamento.findUnique({
      where: {
        id: Number(params.id)
      }
    });

    if(!departamentoId){
      throw new AppError('Departamento não existe');
    }

    const atulaizarDepartamento = await prisma.departamento.update({
      where: {
        id: departamentoId.id
      },
      data: {
        ...body
      }
    });

    return res.status(200).json({ content: atulaizarDepartamento });
  }
}

export default DepartamentoController;