

export interface Localidad {
    codigo: number;
    provincia: number;
    nombre: string;
  }

export interface Persona {
    nombre: string;
    email: string;
    recuerdame: boolean;
    provincia?: number;
    localidad?: number;
    sexo?: string;
  }
