import './header.css'
import { createButton } from '../button/button'

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
  const formSerch = document.createElement('form')
  formSerch.className = 'formSerch'
  formSerch.action = ''
  const lupa = document.createElement('img')
  lupa.src = './assets/lupa.png'
  const serch = document.createElement('input')
  serch.type = 'serch'
  serch.className = 'serch'
  serch.placeholder = 'Que quieres buscar ?'
  const serchButton = document.createElement('button')
  serchButton.className = 'serchButton'
  serchButton.textContent = 'Buscar'
  const buscarMas = document.createElement('button')
  buscarMas.className = 'buscarMas'
  buscarMas.textContent = 'Buscar +'

  divContainerNav.appendChild(logo)
  divContainerNav.appendChild(navIndex)
  formSerch.appendChild(lupa)
  formSerch.appendChild(serch)
  formSerch.appendChild(serchButton)
  divContainerNav.appendChild(formSerch)

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
