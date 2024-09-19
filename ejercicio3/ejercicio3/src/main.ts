import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { empleado } from './ejercicio3/ejercicio3.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <p>nombre: ${empleado.name}</p>
  <p>Cargo: ${empleado.cargo}</p>
  <p>ID: ${empleado.id}</p>
  <p>Marca: ${empleado.carro.marca}</p>
  <p>Modelo: ${empleado.carro.modelo}</p>
  <p>Año: ${empleado.carro.year}</p>
  <p>Cilindraje del motor: ${empleado.carro.motor.cilindraje}</p>
  <p>Valvulas del motor: ${empleado.carro.motor.valvulas}</p>
  <p>Torque del motor: ${empleado.carro.motor.torque}</p>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
