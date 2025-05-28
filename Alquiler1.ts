abstract class Propiedad {
    protected _precioMensual: number;

    constructor(
        protected direccion: string,
        precioMensual: number,
        protected propietario: string
    ) {
        if (precioMensual < 0) throw new Error("El precio no puede ser negativo");
        this._precioMensual = precioMensual;
    }

    set precioMensual(valor: number) {
        if (valor < 0) throw new Error("El precio no puede ser negativo");
        this._precioMensual = valor;
    }

    get precioMensual(): number {
        return this._precioMensual;
    }

    abstract mostrarFicha(): string;
}// clase hijo

class Casa extends Propiedad {
    constructor(
        direccion: string,
        precioMensual: number,
        propietario: string,
        private numeroHabitaciones: number
    ) {
        super(direccion, precioMensual, propietario);
    }

    mostrarFicha(): string {
        return  `Casa en ${this.direccion}\nPropietario: ${this.propietario}\nPrecio: $${this._precioMensual}\nHabitaciones: ${this.numeroHabitaciones}`;
    }
}

class Departamento extends Propiedad {
    constructor(
        direccion: string,
        precioMensual: number,
        propietario: string,
        private piso: number,
        private gastosComunes: number
    ) {
        super(direccion, precioMensual, propietario);
    }

    mostrarFicha(): string {
        return  `Departamento en ${this.direccion} (Piso ${this.piso})\nPropietario: ${this.propietario}\nPrecio: $${this._precioMensual}\nGastos Comunes: $${this.gastosComunes}`;
    }
}

const propiedades: Propiedad[] = [
    new Casa("Av. Manabí y Bolívar", 350, "Juan Pérez", 3),
    new Departamento("Edificio Los Andes", 450, "María López", 5, 50)
];

propiedades.forEach(p => console.log(p.mostrarFicha()));