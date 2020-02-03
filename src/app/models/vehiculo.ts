import { TipoVehiculo } from './tipo-vehiculo';
import { Cliente } from './cliente';

export class Vehiculo {

    constructor(
        public matricula: string,
        public marca: string,
        public modelo: string,
        public tipoVehiculo?: TipoVehiculo,
        public cliente?: Cliente,
        public _id?: string,
        public cloud?: string,
        public clouds?: string,
    ) {}
}
