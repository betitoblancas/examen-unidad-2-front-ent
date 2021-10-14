var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.hola_mundo = function () {
        console.log("Hola mundo");
    };
    App.prototype.ejercicio_2 = function () {
        var cadena = "hola mundo";
        console.log(cadena);
    };
    App.prototype.ejercicio_3 = function () {
        var nombre = prompt("introduce tu nombre");
        console.log("Hola " + nombre);
    };
    App.prototype.ejercicio_4 = function () {
        var nombre = prompt("introduce tu nombre");
        var numero = prompt("introduce un numero");
        numero = parseInt(numero);
        for (var index = 0; index < numero; index++) {
            console.log("Hola " + nombre);
        }
    };
    App.prototype.ejercicio_5 = function () {
        var nombre = prompt("introduce tu nombre");
        console.log("Nombre en minusculas");
        console.log(nombre.toLowerCase());
        console.log("Nombre en mayusculas");
        console.log(nombre.toUpperCase());
        console.log("Nombre con primera letra en mayusculas y lo demas en minusculas");
        console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase());
    };
    App.prototype.ejercicio_6 = function () {
        var edad = prompt("Introduce tu edad");
        edad = parseInt(edad);
        if (17 < edad && edad < 99) {
            console.log("Eres mayor de edad");
        }
        else {
            console.log("No eres mayor de edad");
        }
    };
    App.prototype.ejercicio_7 = function () {
        var contraseña = "contraseña";
        var contraseña2 = prompt("Introduce contraseña");
        contraseña2 = contraseña2.toLowerCase();
        if (contraseña == contraseña2) {
            console.log("contraseña correcta");
        }
        else {
            console.log("contraseña incorrecta");
        }
    };
    App.prototype.ejercicio_8 = function () {
        var palabra = prompt("introduce una palabra");
        for (var index = 0; index < 10; index++) {
            console.log(palabra);
        }
    };
    App.prototype.ejercicio_9 = function () {
        var edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        for (var index = 1; index < edad; index++) {
            console.log(index);
        }
        console.log("Has cumplido " + edad);
    };
    App.prototype.ejercicio_10 = function () {
        var invercion = prompt("introduce la inversion");
        var interes = prompt("introduce el interes anual");
        var años = prompt("introduce el numero de años");
        invercion = parseInt(invercion);
        interes = parseInt(interes);
        años = parseInt(años);
        var capital = invercion + (interes * años);
        console.log(capital);
    };
    App.prototype.ejecutar = function () {
        var opcion = prompt("selecciona una opcion:\n    1.- Ejercicio 1\n    2.- Ejercicio 2\n    3.- Ejercicio 3\n    4.- Ejercicio 4\n    5.- Ejercicio 5\n    6.- Ejercicio 6\n    7.- Ejercicio 7\n    8.- Ejercicio 8\n    9.- Ejercicio 9\n    10.- Ejercicio 10");
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                this.hola_mundo();
                break;
            case 2:
                this.ejercicio_2();
                break;
            case 3:
                this.ejercicio_3();
                break;
            case 4:
                this.ejercicio_4();
                break;
            case 5:
                this.ejercicio_5();
                break;
            case 6:
                this.ejercicio_6();
                break;
            case 7:
                this.ejercicio_7();
                break;
            case 8:
                this.ejercicio_8();
                break;
            case 9:
                this.ejercicio_9();
                break;
            case 10:
                this.ejercicio_10();
                break;
            default:
                break;
        }
    };
    return App;
}());
var examen = new App();
examen.ejecutar();
