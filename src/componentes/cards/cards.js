import './cards.css'
import { keyWord, accesKey, page, boxResults } from '../../../main'
import { boxSearch } from '../header/header'

export async function searchCards() {
  keyWord = boxSearch.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accesKey}`

  console.log('URL de la API:', url)

  const response = await fetch(url)
  const data = await response.json()

  if (page === 1) {
    boxResults.innerHTML = ''
  }
  const results = data.result

  results.forEach((result) => {
    const imagen = document.createElement('img')
    imagen.src = result.urls.small

    const imagenLink = document.createElement('a')
    imagenLink.href = result.links.html
    imagenLink.target = '_blank'

    imagenLink.appendChild(imagen)
    boxResults.appendChild(imagenLink)
  })
}
