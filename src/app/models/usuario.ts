export class Usuario {
    constructor(
        //public id:number,
        public nombre:string,
        public email:string,
        public contraseña:string,
        public rol: 'CLIENTE' | 'TECNICO' | 'ADMIN'
    ){}
}
