class App {
  
  public hola_mundo() {
    console.log("Hola mundo");
    
  }
  public ejercicio_2 (){
    let cadena : string = "hola mundo";
    console.log(cadena);

  }
  public ejercicio_3 (){
    let nombre : any = prompt("introduce tu nombre");
    console.log("Hola " + nombre);

  }
  public ejercicio_4 (){
    let nombre : any = prompt("introduce tu nombre");
    let numero : any = prompt("introduce un numero");
    numero = parseInt(numero);
    for (let index = 0; index < numero; index++) {
      console.log("Hola " + nombre); 
    }
  }
  public ejercicio_5 (){
    let nombre : any = prompt("introduce tu nombre");
    console.log("Nombre en minusculas");
    console.log(nombre.toLowerCase());
    console.log("Nombre en mayusculas");
    console.log(nombre.toUpperCase());
    console.log("Nombre con primera letra en mayusculas y lo demas en minusculas");
    console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase());
  }
  public ejercicio_6 (){
    let edad : any = prompt("Introduce tu edad");
    edad = parseInt(edad);
    if (17<edad && edad<99) {
      console.log("Eres mayor de edad");
    } else {
      console.log("No eres mayor de edad");
    }
  }
  public ejercicio_7 (){
    let contraseña : string = "contraseña";
    let contraseña2 : any = prompt("Introduce contraseña");
    contraseña2 = contraseña2.toLowerCase();
    if (contraseña==contraseña2) {
      console.log("contraseña correcta");
    } else {
      console.log("contraseña incorrecta"); 
    }
  }
  public ejercicio_8 (){
    let palabra : any = prompt("introduce una palabra");
    for (let index = 0; index < 10; index++) {
      console.log(palabra); 
    }
  }
  public ejercicio_9 (){
    let edad : any = prompt("introduce tu edad");
    edad = parseInt(edad);
    for (let index = 1; index < edad; index++) {
      console.log(index); 
    }
    console.log("Has cumplido " + edad);
  }
  public ejercicio_10 (){
    let invercion : any = prompt("introduce la inversion");
    let interes : any = prompt("introduce el interes anual");
    let años : any = prompt("introduce el numero de años");
    invercion = parseInt(invercion);
    interes = parseInt(interes);
    años = parseInt(años);
    let capital = invercion+(interes*años);
    console.log(capital);
    
  }
  public ejecutar (){

    let opcion : any = prompt(`selecciona una opcion:
    1.- Ejercicio 1
    2.- Ejercicio 2
    3.- Ejercicio 3
    4.- Ejercicio 4
    5.- Ejercicio 5
    6.- Ejercicio 6
    7.- Ejercicio 7
    8.- Ejercicio 8
    9.- Ejercicio 9
    10.- Ejercicio 10`);
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
  }
}
const examen = new App();
examen.ejecutar();
