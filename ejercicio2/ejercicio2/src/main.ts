import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { empleado } from './ejercicio2/ejercicio2.ts'
import { proyecto } from './ejercicio2/ejercicio2.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h2>Empleado</h2>
  <p>Nombre: ${empleado.name}</p>
  <p>Numero de ID: ${empleado.id}</p>
  <p>Cargo:  ${empleado.cargo}</p>
  <p>Saldo: ${empleado.saldo}</p>

  <h3>Proyecto e ncurso</h3>
  <p>Nombre del proyecto: ${proyecto.nameProyect}</p>
  <p>Director del proyecto ${proyecto.directorProyect}</p>
  <p>Fecha de inicio del proyecto:  ${proyecto.startProyect}</p>
  <p>Fecha de entrega del proyecto: ${proyecto.finishProyectt}</p>

  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
