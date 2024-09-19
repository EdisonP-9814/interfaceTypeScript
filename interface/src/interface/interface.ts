export {vehiculo};

interface Vehiculo{
    marca: string,
    modelo: string,
    year: string,

    encender(): string,
    apagar(): string
}
//funcion de agregar vehiculos
let marcaVehiculos: string []= [];

function agregarMarca(vehiculo: string){
     marcaVehiculos.push(vehiculo);
     console.log(`Se ha agregado la marca "${vehiculo}" al arreglo.`);
}
//funcion para mostrar el contenido de un arreglo
function mostrar(){
    for(let i = 0; i<marcaVehiculos.length; i++){
        console.log(`Marca ${i + 1}: ${marcaVehiculos[i]}`);
    }
}

//implementacion de la interface Vehiculo 
const vehiculo: Vehiculo = {
    marca: "Toyota",
    modelo: "Supra MK4",
    year: "2015",

    encender() {        
        return"Encendiendo Vehiculo.........Encendido";
    },

    apagar() {
        return "Apagando Vehiculo...........Apagado";
    },
}

//impresion por consola de los atributos
console.log("Marca:->"+vehiculo.marca,"\nModelo:->"+vehiculo.modelo,"\nAño:->"+vehiculo.year,"\n"+vehiculo.encender(),"\n"+vehiculo.apagar());

//agregar marca de autos

agregarMarca("Toyota");
agregarMarca("Honda");
agregarMarca("Ford");
agregarMarca("Chevrolet");

console.log(mostrar());







