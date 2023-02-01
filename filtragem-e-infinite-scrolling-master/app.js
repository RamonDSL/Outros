//?_limit=(número) só trás 5 post 
//&_page=(numero) trazer mais do número anterior no caso mais 5

const postContainer = document.querySelector("#posts-container")
const loaderContainer = document.querySelector('.loader')
const filterInput = document.querySelector('#filter')

// armazenar qual página que deve buscar quando fizer a requisição
let page = 1
// seleciona algo ctrl + d vai selecionando as outras ocorrências conforme for repetindo a ação
// shift + alt + arrow-down duplica a linha
const getPosts = async () => {
    const response = await 
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    return response.json() 
    
    /*Toda função async retorna uma promisse, tira o await na hora de retornar pq ele estava desencapsulando a response, contudo o return está fazendo ela voltar a ser uma promisse
    await estava desencapsulando  */
}

const generatePostTemplate = posts => posts.map(({id, title, body}) => `
        <div class="post">
            <div class="number">${id}</div>
            <div class="post-info">
                <h2 class="post-title">${title}</h2>
                <p class="post-body">${body}</p>
            </div>
        </div>
    `).join('') // transformar todo o array em uma única string, a string vazia é para que o separador que antes era uma virgula agora é nada/espaço em branco

const addPostsInToDOM = async () => {
    const posts = await getPosts()
    const postTemplate = generatePostTemplate(posts)
    
    postContainer.innerHTML += postTemplate

}

const getNextPosts = () => {
    setTimeout(() => {
        page++
        addPostsInToDOM()
    }, 300)
}

const removeLoader = () => {
    setTimeout(() => {
        loaderContainer.classList.remove('show')
        getNextPosts()
    }, 1000)
}

const showLoader = () => {
    loaderContainer.classList.add('show')
    removeLoader()
}

const handleScrollToPageBottom = () => {
    const {clientHeight, scrollHeight, scrollTop} = document.documentElement
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10 // se a distância entre o topo e o topo visivel do documento somado a altura entre topo e o final da parte visivel da página é maior ou igual a altura total do documento - 10 pixels

    
    if (isPageBottomAlmostReached) {
        showLoader()
    }
}

const showPostIfMatchInputValue = inputValue => post => {
    const postTittle = post.querySelector('.post-title').textContent.toLocaleLowerCase()
    const postBody = post.querySelector('.post-body').textContent.toLocaleLowerCase()
    const postContainsInputValue = postTittle.includes(inputValue) || postBody.includes(inputValue) 

    if (postContainsInputValue) {
        post.style.display = "flex"
        return // se o if for executando o return vai parar a execução da função
    }

    post.style.display = "none"
}

const handleInputValue = event => {
    const inputValue = event.target.value.toLocaleLowerCase()
    const posts = document.querySelectorAll('.post')
    
    posts.forEach(showPostIfMatchInputValue(inputValue))
}

addPostsInToDOM()

window.addEventListener('scroll', handleScrollToPageBottom)
filterInput.addEventListener('input', handleInputValue)

//document.documentElement.scrollTop - retorna números que representam em pixel o número de distância entre o topo do documento e o topo vísivel do documento
//document.documentElement.scrollHeight - tamanho total do documento em pixel
//document.documentElement.clientHeight - número representado em pixel a altura entre o topo e o final da parte visivel da página