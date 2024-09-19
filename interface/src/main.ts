import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { vehiculo } from './interface/interface.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <p>Marca del Vehiculo: <br>${vehiculo.marca}</p>
    <p>Modelo del Vehiculo: <br>${vehiculo.modelo}</p>
    <p>Año del Vehiculo: <br>${vehiculo.year}</p>
    <p>${vehiculo.encender()}</p>
    <p>${vehiculo.apagar()}</p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
