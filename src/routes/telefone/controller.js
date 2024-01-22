import prisma from "../../db/index.js"; 
import AppError from "../../utils/AppError.js";

class TelefoneController {
  async createTelefone(req, res){
    const { body } = req;

    const createPhone = await prisma.telefone.create({
      data: {
        ...body,
      } 
    }); 

    return res.status(201).json({ content: createPhone })
  }

  async listarTelefone(req, res){
    const listarTelefone = await prisma.telefone.findMany({
      include: {
        departamento: {
          select: {
            id: true,
            nome: true,
            secretaria: {
              select: {
                nome: true
              }
            }
          }
        },
        cargo: {
          select: {
            nome: true
          }
        },
      },
      where: {
        situacao: 'ATIVADO'
      },
    });

    return res.status(200).json({ content: listarTelefone });
  }

  async listarTelefoneId(req, res){
    const { params } = req
    
    const listarTelefoneId = await prisma.telefone.findUnique({
      include: {
        departamento: {
          select: {
            id: true,
            nome: true,
            secretaria: {
              select: {
                nome: true
              }
            }
          }
        },
        cargo: {
          select: {
            nome: true
          }
        },
      },
      where: {
        id: Number(params.id)
      }
    });

    if(!listarTelefoneId){
      throw new AppError('Não existe esse telefone')
    }

    return res.status(200).json({ content: listarTelefoneId });
  }

  async atualizarTelefone(req, res){
    const { body, params } = req

    const telefoneId = await prisma.telefone.findUnique({
      where: {
        id: Number(params.id),
      }
    });

    if(!telefoneId){
      throw new AppError('Telefone não existe')
    }

    const atualizarTelefone = await prisma.telefone.update({
      where: { 
        id: Number(params.id)
      },
      data: {
        ...body 
      }
    });

    return res.status(200).json({ content: atualizarTelefone });
  }

}

export default TelefoneController; 