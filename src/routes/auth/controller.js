import prisma from "../../db/index.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import _ from "lodash";

class UsuarioController {
    async createUsuario(req, res){
        const { body } = req

        const createUsuario = await prisma.user.create({
            data: {
                ...body
            }
        });

        return res.status(201).json({ content: createUsuario });
    }

    async listarUsuario(req, res){
        const listarUsuario = await prisma.user.findMany({
            where: {
                situacao: 'ATIVADO'
            }
        });

        return res.status(200).json({ content: listarUsuario })
    }

    async loginUsuario(req, res){
        const { body } = req

        const usuarioExist = await prisma.user.findFirst({
            where: {
                nome: body.nome
            }
        });

        try {
            if (!usuarioExist) {
              return res.status(401).json({ menssage: "Não existe usuário cadastro com esses dados" });
            }
          } catch (error) {
            error.statusCode = 404;
            return next(error);
          }

        const senhaConcidem = await bcryptjs.compare(body.senha, usuarioExist.senha);

        
        try {
            if (!senhaConcidem) {
              return res.status(401).json({ menssage: "Não existe usuário cadastro com esses dados" });
            }
         }  catch (error) {
            error.statusCode = 404;
            return next(error);
         }

        
         const token = jwt.sign({ ..._.omit(usuarioExist, "senha") }, process.env.SECRET_PASS_JWT, {
            subject: String(usuarioExist.id),
            expiresIn: 60 * 60 * 3,
          });
      
          return res.status(200).json({ content: { token, session: _.omit(usuarioExist, "senha") } });
        
    }
}

export default UsuarioController