import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid'; 
//import Pets from "./pets";
interface Address {
    city: string; 
    state: string; 
    latitude: number;
    longitude: number;
  }
interface UserType{
   // id: string;
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
    pets?: mongoose.Types.ObjectId[];
};

const schemaMongoUser = new Schema<UserType>({
  //id: { type: String, default: uuidv4, required: true },
  name: { type: String },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cpf: { type: String },
  phone: { type: String },
  address: {
    city: { type: String },
    state: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
  },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now,required: true },
  updatedAt: { type: Date, default: Date.now,},
  pets: { type: [Schema.Types.ObjectId], ref: "Pets", default: [] },
  });

  const User = mongoose.model<UserType>('Users',schemaMongoUser);
  export default User;