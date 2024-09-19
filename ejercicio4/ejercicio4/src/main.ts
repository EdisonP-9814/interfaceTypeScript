import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { empleado } from './ejercicio4/ejercicio4.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

 <p>Nombre: ${empleado.persona.name}</p>
 <p>ID: ${empleado.persona.id}</p>
 <p>Edad: ${empleado.persona.edad}</p>
 <p><br>Cargo: ${empleado.cargo}</p>
 <p>Salario: ${empleado.salario}</p>
 <p>${empleado.horario}</p>

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
