// cards.js

import './cards.css'

export const getRandomPhotos = (accesKey, sectionCards) => {
  const randomUrl = `https://api.unsplash.com/photos/random?count=9&client_id=${accesKey}`

  fetch(randomUrl)
    .then((res) => res.json())
    .then((res) => {
      for (const photo of res) {
        const img = document.createElement('img')
        img.className = 'Card'
        img.src = photo.urls.small
        sectionCards.appendChild(img)
      }
    })
    .catch((error) => console.error('Error fetching random photos:', error))
}

export const getPhotosByTerm = (accesKey, sectionCards, keyword, page = 1) => {
  const searchUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=9&client_id=${accesKey}`

  fetch(searchUrl)
    .then((res) => res.json())
    .then((res) => {
      sectionCards.innerHTML = ''
      console.log(res.results)

      if (res.results.length === 0) {
        // Si no hay resultados, mostrar un mensaje al usuario
        displayNoResultsMessage(sectionCards)
      } else {
        // Si hay resultados, mostrar las fotos
        for (const photo of res.results) {
          const img = document.createElement('img')
          img.className = 'Card'
          img.src = photo.urls.small
          sectionCards.appendChild(img)
        }
      }
    })
    .catch((error) => console.error('Error fetching search results:', error))
}

const displayNoResultsMessage = (sectionCards) => {
  // Elimina cualquier contenido existente en la sección de tarjetas
  sectionCards.innerHTML = ''

  // Crea un elemento de mensaje
  const noResultsMessage = document.createElement('p')
  noResultsMessage.textContent = 'No se han obtenido resultados !!!'
  noResultsMessage.className = 'noResults'

  // Agrega el mensaje a la sección de tarjetas
  sectionCards.appendChild(noResultsMessage)
}
