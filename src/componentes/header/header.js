// import './header.css'
// import { createButton } from '../button/button'
// export const formSearch = document.createElement('form')
// export let page = 1

// export const headerContainer = () => {
//   const divContainerNav = document.createElement('div')
//   divContainerNav.className = 'divContainerNav'
//   const logo = document.createElement('img')
//   logo.src = './assets/Pinterest-logo.png'
//   logo.className = 'logo'
//   const navIndex = document.createElement('div')
//   navIndex.className = 'navIndex'
//   navIndex.innerHTML = `
//   ${createButton({ texto: 'Empresa' })}
//   ${createButton({ texto: 'Crear' })}
//   ${createButton({ texto: 'Analytic' })}
//   `
//   const formSearch = document.createElement('form')
//   formSearch.className = 'formSerch'
//   formSearch.action = ''
//   const lupa = document.createElement('img')
//   lupa.src = './assets/lupa.png'
//   const search = document.createElement('input')
//   search.type = 'search'
//   search.className = 'search'
//   search.placeholder = 'Que quieres buscar ?'
//   const serchButton = document.createElement('button')
//   serchButton.className = 'serchButton'
//   serchButton.textContent = 'Buscar'
//   const buscarMas = document.createElement('button')
//   buscarMas.className = 'buscarMas'
//   buscarMas.textContent = 'Buscar +'

//   divContainerNav.appendChild(logo)
//   divContainerNav.appendChild(navIndex)
//   formSearch.appendChild(lupa)
//   formSearch.appendChild(search)
//   formSearch.appendChild(serchButton)
//   divContainerNav.appendChild(formSearch)

//   const divIndex = document.createElement('div')
//   divIndex.className = 'divIndex'
//   const notification = document.createElement('img')
//   notification.src = './assets/campana.png'
//   notification.className = 'notification'
//   const message = document.createElement('img')
//   message.src = './assets/mensajes.png'
//   const user = document.createElement('img')
//   user.src = './assets/user.jpeg'

//   divContainerNav.appendChild(buscarMas)
//   divIndex.appendChild(notification)
//   divIndex.appendChild(message)
//   divIndex.appendChild(user)
//   divContainerNav.appendChild(divIndex)

//   return divContainerNav
// }

import './header.css'
import { createButton } from '../button/button'
export const formSearch = document.createElement('form')

export const headerContainer = () => {
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
  const formSearch = document.createElement('form')
  formSearch.className = 'formSerch'
  formSearch.action = ''
  const lupa = document.createElement('img')
  lupa.src = './assets/lupa.png'
  const search = document.createElement('input')
  search.type = 'search'
  search.className = 'search'
  search.placeholder = 'Que quieres buscar ?'
  const serchButton = document.createElement('button')
  serchButton.className = 'serchButton'
  serchButton.textContent = 'Buscar'
  const buscarMas = document.createElement('button')
  buscarMas.className = 'buscarMas'
  buscarMas.textContent = 'Buscar +'

  divContainerNav.appendChild(logo)
  divContainerNav.appendChild(navIndex)
  formSearch.appendChild(lupa)
  formSearch.appendChild(search)
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

  return divContainerNav
}
