import { PetType } from "../entities/pets";
import User from "../entities/user";
import CidadeModel from "../entities/cidade";

export default class PetCitySimilarCaseUse {
    async execute(userId: string): Promise<PetType[]> {
        try {
            console.log('=== INICIANDO PetCitySimilarCaseUse ===');
            console.log('UserId recebido:', userId);
            
            // Encontra o usuário logado
            const user = await User.findById(userId);
            if (!user) {
                console.log('❌ Usuário não encontrado');
                throw new Error('Owner not found');
            }

            console.log('✅ Usuário encontrado:', user.name);
            console.log('Cidade do usuário:', user.address?.city);
            
            // Busca TODAS as cidades da tabela (apenas os nomes)
            const cidadesValidas = await CidadeModel.find({}, { nome: 1 });
            const nomesCidades = cidadesValidas.map(c => c.nome);
            
            console.log('Cidades válidas na tabela:', nomesCidades);
            console.log('Total de cidades válidas:', nomesCidades.length);
            
            // Encontra todos os usuários que têm cidades que estão na tabela
            // e exclui o usuário logado
            const usuariosComCidadesValidas = await User.find({
                'address.city': { $in: nomesCidades },
                _id: { $ne: user._id }
            });
            
            console.log('Usuários com cidades válidas:', usuariosComCidadesValidas.length);
            console.log('IDs dos usuários:', usuariosComCidadesValidas.map(u => u._id));
            
            // Se não há outros usuários com cidades válidas, retorna vazio
            if (usuariosComCidadesValidas.length === 0) {
                console.log('❌ Nenhum outro usuário com cidade válida encontrado');
                return [];
            }

            // Agregação para buscar os pets desses usuários
            const result = await User.aggregate([
                {
                    $match: {
                        'address.city': { $in: nomesCidades },
                        _id: { $ne: user._id }
                    }
                },
                {
                    $lookup: {
                        from: 'pets',
                        localField: 'pets',
                        foreignField: '_id',
                        as: 'petObjects'
                    }
                },
                { $unwind: '$petObjects' },
                {
                    $replaceRoot: {
                        newRoot: '$petObjects'
                    }
                },
                {
                    $project: {
                        relations: 0
                    }
                }
            ]);

            console.log('✅ Pets encontrados:', result.length);
            console.log('Pets:', result);

            return result as PetType[];

        } catch (error) {
            console.error('❌ Erro no PetCitySimilarCaseUse:', error);
            throw error;
        }
    }
}