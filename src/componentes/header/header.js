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
  buscarMas.textContent = 'Buscar+'

  divContainerNav.appendChild(logo)
  divContainerNav.appendChild(navIndex)
  formSearch.appendChild(lupa)
  formSearch.appendChild(inputSearch)
  formSearch.appendChild(serchButton)
  divContainerNav.appendChild(formSearch)
  divContainerNav.appendChild(buscarMas)

  const divIndex = document.createElement('div')
  divIndex.className = 'divIndex'

  const notificationLink = document.createElement('a')
  const notification = document.createElement('img')
  notification.src = './assets/campana.png'

  const messageLink = document.createElement('a')
  const messageImg = document.createElement('img')
  messageImg.src = './assets/mensajes.png'

  const userLink = document.createElement('a')
  const userImg = document.createElement('img')
  userImg.src = './assets/user.jpeg'

  messageLink.appendChild(messageImg)
  notificationLink.appendChild(notification)
  userLink.appendChild(userImg)
  divIndex.appendChild(notificationLink)
  divIndex.appendChild(messageLink)
  divIndex.appendChild(userLink)
  divContainerNav.appendChild(divIndex)

  console.log(buscarMas)
  let page = 1

  buscarMas.addEventListener('click', (event) => {
    console.log('api fotos')
    event.preventDefault()
    const sectionCards = document.querySelector('.sectionCards')

    const keyword = inputSearch.value.trim()
    const accesKey = 'dnz2GXzigR1OZz7pVgqABZ5ucEvzif-6fXObB3tn2v8'
    if (keyword !== '') {
      // Si hay un término de búsqueda, carga fotos con ese término
      getPhotosByTerm(accesKey, sectionCards, keyword, page)
    } else {
      // Si no hay un término de búsqueda, carga fotos aleatorias
      getRandomPhotos(accesKey, sectionCards)
    }
    page++

    // Hacer scroll al final de la página
    window.scrollTo(0, document.body.scrollHeight)
  })

  return divContainerNav
}
