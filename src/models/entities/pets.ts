
export default interface Pets{
    id: number;
    name: string;
    age: number;
    species: string; 
    breed: string;
    weight?: number;
    size?: number;
    photos?: string[];
};