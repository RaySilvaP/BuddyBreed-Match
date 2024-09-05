import User from "../entities/user"; // Certifique-se de que o modelo User está corretamente importado

export class RegisterUserCaseUse {
    async execute({ userName, email, password }: { userName: string; email: string; password: string }) {
        console.log(userName,email,password)
    }
}
