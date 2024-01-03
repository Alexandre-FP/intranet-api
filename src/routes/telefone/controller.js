import prisma from "../../db/index.js"; 

class TelefoneController {
  async createPhone(req, res){
    const { body } = req;

    const createPhone = await prisma.telefone.create({
      data: {
        ...body 
      }
    }); 

    return res.status(201).json({ content: createPhone })
  }
}

export default TelefoneController;