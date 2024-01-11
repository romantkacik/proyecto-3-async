// footer.js
import './footer.css'

export const footerContainer = () => {
  const footerMain = document.createElement('footer')
  footerMain.className = 'footerMain'

  const createBy = document.createElement('p')
  createBy.className = 'createBy'
  createBy.textContent = 'Create by Román Luciano Tkacik {RTC}'

  const linksDiv = document.createElement('div')
  linksDiv.className = 'linksDiv'

  const github = document.createElement('a')
  github.href = 'https://github.com/romantkacik/proyecto-3-async'
  const imgGithub = document.createElement('img')
  imgGithub.src = './public/assets/github.png'
  github.appendChild(imgGithub)

  const linkedin = document.createElement('a')
  linkedin.href = 'https://www.linkedin.com/in/rom%C3%A1n-luciano-tkacik-b81881203/'
  const imgLinkedin = document.createElement('img')
  imgLinkedin.src = './public/assets/linkedin.png'
  linkedin.appendChild(imgLinkedin)

  linksDiv.appendChild(github)
  linksDiv.appendChild(linkedin)

  footerMain.appendChild(createBy)
  footerMain.appendChild(linksDiv)

  return footerMain
}
