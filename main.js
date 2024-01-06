import './style.css'
import { headerContainer, formSearch } from './src/componentes/header/header'

const divApp = document.querySelector('#app')

const headerContent = headerContainer()
divApp.appendChild(headerContent)

let keyWord = ''
let page = 1
const accesKey = 'f71Npw_KP6sDCHZnZlPAuddGYIGb_i3sGIWy4vfaMKo'

async function searchCards() {
  keyWord = formSearch.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accesKey}`

  console.log('URL de la API:', url)

  try {
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      console.log('Respuesta de la API:', data)

      const cardsSearch = document.createElement('section')
      cardsSearch.className = 'cardsSearch'

      if (page === 1) {
        cardsSearch.innerHTML = ''
      }

      const results = data.results

      results.map((result) => {
        const imagen = document.createElement('img')
        imagen.src = result.urls.small

        const imagenLink = document.createElement('a')
        imagenLink.href = result.links.html
        imagenLink.target = '_blank'

        imagenLink.appendChild(imagen)
        cardsSearch.appendChild(imagenLink)
      })

      // Agrega la sección de tarjetas al DOM
      divApp.appendChild(cardsSearch)
    } else {
      console.error('Error en la respuesta de la API:', response.status)
    }
  } catch (error) {
    console.error('Error en la búsqueda de tarjetas:', error)
  }
}

// Llama a searchCards cuando se carga la página
searchCards()

formSearch.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  searchCards()
})
