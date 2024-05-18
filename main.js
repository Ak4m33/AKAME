const img = document.querySelector('.img')
const titulo = document.querySelector('.titulo')
const subtitulo = document.querySelector('.sub-titulo')
const bio = document.querySelector('.bio')
const qtdSeguidores = document.querySelector('.qtd-Seguidores')
const qtdSeguindo = document.querySelector('.qtd-Seguindo')
const qtdRepositorios = document.querySelector('.qtd-repositores')

const url = 'https://api.github.com/users/Ak4m33'
const getData = async() =>{
    const response = await fetch(url)
    const data = await response.json()
    
    img.setAttribute('src',data.avatar_url)
    titulo.innerHTML = data.name
    subtitulo.innerHTML = data.login
    bio.innerHTML = data.bio
    qtdSeguidores.innerHTML = data.folowers
    qtdRepositorios.innerHTML = data.public_repos
    qtdSeguindo.innerHTML = data.following
}


getData()

