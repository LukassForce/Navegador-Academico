export interface Justificacion{
    id:number;
    nombre:string;
    apellido:string;
    curso:string;
    asunto:string;
    mensaje:string;
}
export let listUsers:Array<Justificacion> = [];