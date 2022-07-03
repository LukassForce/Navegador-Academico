export interface Usuario{
    id:number;
    rut:string;
    password:string;
    nombre:string;
    apellido:string;
    curso:string;
}
export let listUsers:Array<Usuario> = [];