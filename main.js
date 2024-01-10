// main.js
import './style.css'
import {
  headerContainer,
  formSearch,
  inputSearch,
  buscarMas,
} from './src/componentes/header/header'
import { getPhotosByTerm, getRandomPhotos } from './src/componentes/cards/cards'
import { footerContainer } from './src/componentes/footer/footer'

document.addEventListener('DOMContentLoaded', function () {
  const divApp = document.querySelector('#app')

  // Crea el contenedor del encabezado y lo añade al DOM
  const accesKey = 'dnz2GXzigR1OZz7pVgqABZ5ucEvzif-6fXObB3tn2v8'

  // Crea el contenedor de navegación y lo añade al DOM
  const headerContent = headerContainer(accesKey)
  divApp.appendChild(headerContent)

  // Crea el contenedor de las tarjetas y lo añade al DOM
  const sectionCards = document.createElement('section')
  sectionCards.classList.add('sectionCards')
  divApp.appendChild(sectionCards)

  // Crea el footer y lo añade al DOM
  const footer = footerContainer()
  divApp.appendChild(footer)

  // Llama a la función para mostrar fotos aleatorias inicialmente
  getRandomPhotos(accesKey, sectionCards)

  formSearch.addEventListener('submit', (event) => {
    event.preventDefault()
    const keyword = inputSearch.value.trim()

    if (keyword !== '') {
      // Llama a la función para mostrar fotos según la búsqueda
      getPhotosByTerm(accesKey, sectionCards, keyword)
    }
  })
})
