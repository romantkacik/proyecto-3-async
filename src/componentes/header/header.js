// header.js
import './header.css'
import { createButton } from '../button/button'
import { getPhotosByTerm, getRandomPhotos } from '../cards/cards'

export const formSearch = document.createElement('form')
export const inputSearch = document.createElement('input')
export const buscarMas = document.createElement('button')

export const headerContainer = (accesKey, sectionCards) => {
  const divContainerNav = document.createElement('div')
  divContainerNav.className = 'divContainerNav'

  const logo = document.createElement('img')
  logo.src = './assets/Pinterest-logo.png'
  logo.className = 'logo'

  const navIndex = document.createElement('div')
  navIndex.className = 'navIndex'
  navIndex.innerHTML = `
    ${createButton({ texto: 'Empresa' })}
    ${createButton({ texto: 'Crear' })}
    ${createButton({ texto: 'Analytic' })}
  `

  formSearch.className = 'formSearch'
  formSearch.action = ''

  const lupa = document.createElement('img')
  lupa.src = './assets/lupa.png'

  inputSearch.type = 'text'
  inputSearch.className = 'inputSearch'
  inputSearch.placeholder = '¿Qué quieres buscar?'

  const serchButton = document.createElement('button')
  serchButton.className = 'serchButton'
  serchButton.textContent = 'Buscar'
  serchButton.type = 'submit'

  const buscarMas = document.createElement('button')
  buscarMas.className = 'buscarMas'
  buscarMas.textContent = 'Buscar +'

  divContainerNav.appendChild(logo)
  divContainerNav.appendChild(navIndex)
  formSearch.appendChild(lupa)
  formSearch.appendChild(inputSearch)
  formSearch.appendChild(serchButton)
  divContainerNav.appendChild(formSearch)

  const divIndex = document.createElement('div')
  divIndex.className = 'divIndex'

  const notification = document.createElement('img')
  notification.src = './assets/campana.png'
  notification.className = 'notification'

  const message = document.createElement('img')
  message.src = './assets/mensajes.png'

  const user = document.createElement('img')
  user.src = './assets/user.jpeg'

  divContainerNav.appendChild(buscarMas)
  divIndex.appendChild(notification)
  divIndex.appendChild(message)
  divIndex.appendChild(user)
  divContainerNav.appendChild(divIndex)

  formSearch.addEventListener('submit', (event) => {
    event.preventDefault()
    const keyword = inputSearch.value.trim()
    if (keyword !== '') {
      // Llama a la función pasando las variables necesarias
      getPhotosByTerm(accesKey, sectionCards, keyword)
    }
  })
  buscarMas.addEventListener('click', (event) => {
    event.preventDefault()
    const keyword = inputSearch.value.trim()

    if (keyword !== '') {
      // Si hay un término de búsqueda, carga fotos con ese término
      getPhotosByTerm(accesKey, sectionCards, keyword)
    } else {
      // Si no hay un término de búsqueda, carga fotos aleatorias
      getRandomPhotos(accesKey, sectionCards)
    }
    // Hacer scroll al final de la página
    window.scrollTo(0, document.body.scrollHeight)
  })

  return divContainerNav
}
