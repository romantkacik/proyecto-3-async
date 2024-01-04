import './style.css'
import { headerContainer } from './src/componentes/header/header'

const divApp = document.querySelector('#app')

const headerContent = headerContainer()
divApp.appendChild(headerContent)

let keyWord = ''
let page = 1
const accesKey = 'f71Npw_KP6sDCHZnZlPAuddGYIGb_i3sGIWy4vfaMKo'
