import Pets from "./pets";

interface Address {
    city: string; 
    state: string; 
    latitude: number;
    longitude: number;
  }
export default interface User{
    id: string;
    name?: string;
    userName: string;
    email: string;
    password: string;
    cpf?: string;
    phone?: string;
    address?: Address;
    role: string;
    createdAt: Date;
    updatedAt?: Date;
    pets?:Pets[];
};