
export class Cliente {

    constructor(
        public identificador: string,
        public nombre: string,
        public email: string,
        public _id?: string,
        public cloud?: string,
        public clouds?: string,
    ) {}
}
