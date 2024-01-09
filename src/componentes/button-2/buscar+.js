buscarMasButton.addEventListener('click', () => {
  // Genera un término de búsqueda aleatorio
  const randomKeywords = ['nature', 'city', 'animals', 'architecture', 'food']
  const randomIndex = Math.floor(Math.random() * randomKeywords.length)
  keyWord = randomKeywords[randomIndex]

  const newUrl = `https://api.unsplash.com/search/photos?page=&query=${keyWord}&per_page=9&client_id=${accesKey}`

  // Realiza una nueva llamada a la API con el término de búsqueda aleatorio
  fetch(newUrl)
    .then((res) => res.json())
    .then((res) => {
      // Elimina las fotos antiguas del contenedor
      sectionCards.innerHTML = ''

      // Agrega las nuevas fotos al contenedor
      for (const photos of res.results) {
        const Img = document.createElement('img')
        Img.className = 'Card'
        Img.src = photos.urls.small
        sectionCards.appendChild(Img)
      }
    })
})
