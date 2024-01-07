// main.js
import './style.css'
import { headerContainer, formSearch, boxSearch } from './src/componentes/header/header'
import { displayImages } from './src/componentes/cards/cards'

const divApp = document.querySelector('#app')
const headerContent = headerContainer()

divApp.appendChild(headerContent)

const cardsContainer = document.createElement('section')
cardsContainer.classList.add('cardsContainer')
divApp.appendChild(cardsContainer)

let keyWord = generateRandomKeyword() // Generamos una palabra clave aleatoria al cargar la página
let page = 1
const accesKey = 'f71Npw_KP6sDCHZnZlPAuddGYIGb_i3sGIWy4vfaMKo'
let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accesKey}`

console.log('URL de la API:', url)

async function fetchData() {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('Datos obtenidos de la API:', data.results)

    // Llamamos a la función displayImages para mostrar las imágenes en las tarjetas.
    displayImages(data.results)
  } catch (error) {
    console.error('Error al obtener datos de la API:', error)
  }
}

// Función para generar una palabra clave aleatoria
function generateRandomKeyword() {
  const keywords = ['landscape', 'city', 'animals', 'nature', 'food', 'travel']
  const randomIndex = Math.floor(Math.random() * keywords.length)
  return keywords[randomIndex]
}

// Configurar el evento "Buscar Más" para obtener nuevas imágenes aleatorias
const buscarMasButton = document.querySelector('.buscarMas')
buscarMasButton.addEventListener('click', function () {
  keyWord = generateRandomKeyword() // Generar una nueva palabra clave aleatoria
  page = 1 // Restablecer la página a 1 al hacer clic en "Buscar Más"
  url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accesKey}`
  fetchData()
})

// Llamada a la función fetchData para obtener datos al cargar la página
fetchData()

// Configurar el evento de búsqueda al enviar el formulario
formSearch.addEventListener('submit', function (e) {
  e.preventDefault()
  keyWord = boxSearch.value.trim() // Obtener la palabra clave de la caja de búsqueda
  if (keyWord !== '') {
    page = 1 // Restablecer la página a 1 al realizar una búsqueda personalizada
    url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accesKey}`
    fetchData()
  }
})
