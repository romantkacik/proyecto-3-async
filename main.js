import './style.css'
import { headerContainer } from './src/componentes/header/header'
import { searchCards } from './src/componentes/cards/cards'

export const keyWord = ''
export let page = 1
export const accesKey = 'f71Npw_KP6sDCHZnZlPAuddGYIGb_i3sGIWy4vfaMKo'

const divApp = document.querySelector('#app')
export const boxResults = document.createElement('section')
boxResults.classList.add('boxResults')

const headerContent = headerContainer()
const cardsContainer = searchCards()
divApp.appendChild(headerContent)
divApp.appendChild(boxResults)
divApp.appendChild(cardsContainer)

// formSearch.addEventListener('submit', (e) => {
//   e.preventDefault()
//   page = 1
//   searchCards()
// })
