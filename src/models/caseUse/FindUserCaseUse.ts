import User from "../entities/user";

export class FindUserCaseUse{
    async execute(userName:string){
        const user = await User.find({userName:{$regex: new RegExp(userName, 'i')}});
        return user;
    };
};