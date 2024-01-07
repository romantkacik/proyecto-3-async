import './cards.css'

export const displayImages = (images) => {
  const cardsContainer = document.querySelector('.cardsContainer')

  images.forEach((image) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = image.urls.small
    img.alt = image.alt_description

    card.appendChild(img)
    cardsContainer.appendChild(card)
  })
}
