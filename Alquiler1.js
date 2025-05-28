var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Propiedad = /** @class */ (function () {
    function Propiedad(direccion, precioMensual, propietario) {
        this.direccion = direccion;
        this.propietario = propietario;
        if (precioMensual < 0)
            throw new Error("El precio no puede ser negativo");
        this._precioMensual = precioMensual;
    }
    Object.defineProperty(Propiedad.prototype, "precioMensual", {
        get: function () {
            return this._precioMensual;
        },
        set: function (valor) {
            if (valor < 0)
                throw new Error("El precio no puede ser negativo");
            this._precioMensual = valor;
        },
        enumerable: false,
        configurable: true
    });
    return Propiedad;
}()); // clase hijo
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(direccion, precioMensual, propietario, numeroHabitaciones) {
        var _this = _super.call(this, direccion, precioMensual, propietario) || this;
        _this.numeroHabitaciones = numeroHabitaciones;
        return _this;
    }
    Casa.prototype.mostrarFicha = function () {
        return "Casa en ".concat(this.direccion, "\nPropietario: ").concat(this.propietario, "\nPrecio: $").concat(this._precioMensual, "\nHabitaciones: ").concat(this.numeroHabitaciones);
    };
    return Casa;
}(Propiedad));
var Departamento = /** @class */ (function (_super) {
    __extends(Departamento, _super);
    function Departamento(direccion, precioMensual, propietario, piso, gastosComunes) {
        var _this = _super.call(this, direccion, precioMensual, propietario) || this;
        _this.piso = piso;
        _this.gastosComunes = gastosComunes;
        return _this;
    }
    Departamento.prototype.mostrarFicha = function () {
        return "Departamento en ".concat(this.direccion, " (Piso ").concat(this.piso, ")\nPropietario: ").concat(this.propietario, "\nPrecio: $").concat(this._precioMensual, "\nGastos Comunes: $").concat(this.gastosComunes);
    };
    return Departamento;
}(Propiedad));
var propiedades = [
    new Casa("Av. Manabí y Bolívar", 350, "Juan Pérez", 3),
    new Departamento("Edificio Los Andes", 450, "María López", 5, 50)
];
propiedades.forEach(function (p) { return console.log(p.mostrarFicha()); });
