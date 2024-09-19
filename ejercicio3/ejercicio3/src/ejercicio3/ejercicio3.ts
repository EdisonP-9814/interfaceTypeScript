interface Motor{
    cilindraje: string,
    valvulas: string,
    torque: string,
}
interface Carro{
    marca: string,
    modelo: string,
    year: string,
    motor: Motor
}
interface Empleado{
    name: string,
    id: string | number,
    cargo: string,
    carro: Carro
}

export const empleado: Empleado={
    name: "Juan Mecanico",
    id: "100011100",
    cargo: "Asesor comercial",
    carro:{
        marca: "Honda",
        modelo: "Oddyssey",
        year: "2021",
        motor:{
            cilindraje: "3.5L",
            valvulas: "24 válvulas, con un sistema SOHC i-VTEC",
            torque: "El motor genera un torque de 267 lb-pie a 4,700 rpm"
        }
    }
}