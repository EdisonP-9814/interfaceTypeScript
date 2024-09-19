interface Persona{
    name: string,
    id: string,
    edad: string | number,
}
interface Empleado{
    persona: Persona,
    cargo: string,
    salario: number,
    horario: string
}

export const empleado: Empleado={
    persona:{
        name: "Luis Diaz",
        id: "1000122512",
        edad: "28 años"
    },
    cargo: "Desarrollador Junior",
    salario: 2500000,
    horario: "El horario de trabajo de 8 Am a 4 Pm"
}