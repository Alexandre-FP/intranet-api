import prisma from "../../db/index.js"; 

class TelefoneController {
  async createTelefone(req, res){
    const { body } = req;
    const { originalname } = req.file

    const createPhone = await prisma.telefone.create({
      data: {
        ...body,
        images: originalname, 
        departamentoId: 1, 
        cargoId: 1,
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
      }
    });

    return res.status(200).json({ content: listarTelefone });
  }
}

export default TelefoneController; 