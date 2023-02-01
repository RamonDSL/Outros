const url = "https://jsonplaceholder.typicode.com/posts";

const loadElement = document.querySelector('.loading')
const postsContainer = document.querySelector('.posts-container')

const postPage = document.querySelector('#post')
const postContainer = document.querySelector("#post-container")
const commentContainer = document.querySelector("#coment-form")

// comments form
const commentForm = document.querySelector('#coment-form')
const emailInput = document.querySelector('#email')
const bodyInput = document.querySelector('#body')

// get id from URL

const urlSearchParams = new URLSearchParams(window.location.search) //acessar url
const postId = urlSearchParams.get("id")

// get all posts
async function getAllPosts() {
    
    const response = await fetch(url)

    console.log(response);

    const data = await response.json() // transformar os dados pegos em um json

    console.log(data);

    loadElement.classList.add('hide') // esconder a mensagem de carregamento

    data.map(post => {

        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = post.title
        body.innerText = post.body
        link.innerText = "ler"
        link.setAttribute('href', `/post.html?id=${post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)
    })
}

// get individual post
async function getPost(id) {

    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json()
    const dataComments= await responseComments.json()

    loadElement.classList.add('hide')
    postPage.classList.remove('hide')

    const title = document.createElement('h1')
    const body = document.createElement("p")
    
    title.innerText = dataPost.title
    body.innerText = dataPost.body

    postContainer.appendChild(title)
    postContainer.appendChild(body)

    console.log(dataComments);

    dataComments.map(comment => {
        createComment(comment)
    })
}

function createComment(comment) {

    const div = document.createElement('div')
    const email = document.createElement('h3')
    const commentbody = document.createElement('p')

    email.innerText = comment.email
    commentbody.innerText = comment.body

    div.appendChild(email)
    div.appendChild(commentbody)

    commentContainer.appendChild(div)
}

// post a Comment
async function postComment(comment) {
                                // para onde enviar,
    const response = await fetch(`${url}/${postId}/comments`, {
        method: "POST",
        body: comment,
        headers: {
            "content-type": "application/json", // tipo de dado que será trafegado na api
        },
    })

    const data = await response.json()

    createComment(data);
}

if (!postId) {
    getAllPosts()
} else {
    getPost(postId)

    // Add event to comment
    commentForm.addEventListener('submit', event => {
        event.preventDefault()

        let comment = {
            email: emailInput.value,
            body: bodyInput.value,
        }

        comment = JSON.stringify(comment)

        postComment(comment)
    })
}
