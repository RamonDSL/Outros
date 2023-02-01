const nav = document.querySelector(".nav")
const btnMenu = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu")

function handleButtonClick(event) {
    if (event.type === "touchstart") event.preventDefault()
    event.stopPropagation()
    nav.classList.toggle("active")
    handleClickOutside(menu, () => {
        nav.classList.remove('active')
        setAria()
    }) // vai observar um elemento alvo(menu) a ul no html e irá receber uma função de callback que irá remover a class active se alguém clicar fora do menu
    setAria()
}

function handleClickOutside(targetElement, callback) {// recebe um elemento alvo e um callback 
    const html = document.documentElement //O document.documentElement retorna o Elemento que é o elemento raiz do documento (por exemplo, o elemento <html> para documentos HTML).
    function handleHTMLCick(event) {
        if (!targetElement.contains((event.target))) {
            targetElement.removeAttribute("data-target")
            html.removeEventListener('click', handleHTMLCick)
            html.removeEventListener('touchstart', handleHTMLCick)
            callback()
        }
    }

    if (!targetElement.hasAttribute("data-target")) {
        html.addEventListener('click', handleHTMLCick)
        html.addEventListener('touchstart', handleHTMLCick)
        targetElement.setAttribute("data-target", "")
    }
}

function setAria() {
    const isActive = nav.classList.contains('active')
    btnMenu.setAttribute('aria-expanded', isActive)
    if (isActive) {
        btnMenu.setAttribute('aria-label', 'Fechar Menu')
    } else {
        btnMenu.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMenu.addEventListener("click", handleButtonClick)
btnMenu.addEventListener("touchstart", handleButtonClick)// no mobile por causa de ter dois eventos de click faz com que a class seja add e remove