//Sistema de Gestion de Empleados y Proyectos
interface Habilidad{
}
interface Empleado{
    name: string,
    id: string | number,
    cargo: string,
    saldo: number
}
interface Proyecto{
    nameProyect: string,
    directorProyect: string,
    startProyect: Date,
    finishProyectt: Date,
}

export const empleado: Empleado={
    name: "Jhon Edison",
    id: "10001110",
    cargo: "Director de Proyectos",
    saldo: 3500000
}

export const proyecto: Proyecto={
    nameProyect: "Desarrollo de interfaces TypeScript",
    directorProyect:"Jhon Edison",
    startProyect: new Date("2024-09-13"),
    finishProyectt: new Date("2024-09-18")
}