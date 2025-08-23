import Cidade from "../entities/cidade";

export class FindCityCaseUse {
    async execute(cityName: string): Promise<boolean> {
        try {
            const cidade = await Cidade.findOne({ 
                nome: { $regex: new RegExp(`^${cityName}$`, 'i') } 
            });
            
            return !!cidade;
        } catch (error) {
            console.error("Erro ao verificar cidade:", error);
            throw new Error("Falha ao verificar a cidade.");
        }
    }
}