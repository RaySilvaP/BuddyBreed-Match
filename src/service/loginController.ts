import { Request, Response } from "express";
import bcrypt from "bcrypt"; // Supondo que você esteja usando bcrypt para hashear senhas
import User from "../models/entities/user";
import { generateToken} from "./jwtService";

export class LoginController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado!" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Senha incorreta!" });
            }

            const token = generateToken(user.email, user.role);

            return res.status(200).json({
                token,
                user: {
                    email: user.email,
                    role: user.role,
                },
            });
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            return res.status(500).json({ message: "Erro ao processar a solicitação." });
        }
    }
}
