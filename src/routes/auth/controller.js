import prisma from "../../db/index.js";
import AppError from "../../utils/AppError.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import _ from "lodash";

class UsuarioController {
    async createUsuario(req, res){
        const { body } = req;

        const senhaEncriptada = await bcrypt.hash(body.senha, 8);

        const createUsuario = await prisma.usuario.create({
            data: {
                ...body,
                senha: senhaEncriptada
            }
        })

        return res.status(201).json({ content: createUsuario }); 
    }

    async listarUsuario(req, res){
        const listarUsuario = await prisma.$queryRaw`
            select id, nome, situacao from usuarios where situacao = 'ATIVADO'
        `;

        return res.status(200).json({ content: listarUsuario });
    }

    async loginUsuario(req, res){
        const { body } = req

        const  usuarioExist  = await prisma.usuario.findFirst({
            where: {
                nome: body.nome
            }
        });

        if (!usuarioExist) { 
            throw new AppError("Não existe usuário cadastro com esses dados");
        }
          
        const senhaConcidem = await bcrypt.compare(body.senha, usuarioExist.senha);

        if (!senhaConcidem) {
            throw new AppError("Não existe usuário cadastro com esses dados");
        }
 
        
        const token = jwt.sign({ ..._.omit(usuarioExist, "senha") }, process.env.SECRET_PASS_JWT, {
            subject: String(usuarioExist.id),
            expiresIn: 60 * 60 * 3,
          });
      
        return res.status(200).json({ content: { token, session: _.omit(usuarioExist, "senha") } }); 
        
    }
}

export default UsuarioController