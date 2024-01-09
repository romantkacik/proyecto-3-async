// main.js
import './style.css'
import { headerContainer, formSearch, inputSearch } from './src/componentes/header/header'
import { getPhotosByTerm, getRandomPhotos } from './src/componentes/cards/cards'

document.addEventListener('DOMContentLoaded', function () {
  const divApp = document.querySelector('#app')

  // Crea el contenedor de las tarjetas y lo añade al DOM
  const sectionCards = document.createElement('section')
  sectionCards.classList.add('sectionCards')
  divApp.appendChild(sectionCards)

  // Crea el contenedor del encabezado y lo añade al DOM
  const accesKey = 'dnz2GXzigR1OZz7pVgqABZ5ucEvzif-6fXObB3tn2v8'

  // Llama a la función para mostrar fotos aleatorias inicialmente
  getRandomPhotos(accesKey, sectionCards)

  const headerContent = headerContainer(accesKey, sectionCards) // Pasa accesKey y sectionCards al encabezado
  divApp.appendChild(headerContent)

  formSearch.addEventListener('submit', (event) => {
    event.preventDefault()
    const keyword = inputSearch.value.trim()

    if (keyword !== '') {
      // Llama a la función para mostrar fotos según la búsqueda
      getPhotosByTerm(accesKey, sectionCards, keyword)
    }
  })
})
