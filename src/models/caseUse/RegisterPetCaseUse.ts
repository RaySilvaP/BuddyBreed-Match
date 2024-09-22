import Pet, {PetType} from "../entities/pet";
import User from "../entities/user";

export class RegisterPetCaseUse {
    async execute(userId: string, pet: PetType) {
        const user = await User.findById(userId);
        if(!user)
            throw('Owner not found.');

        const res = await Pet.create(pet);      
        user.pets.push(res.id);
        user.save();
        return res;
    };
};
