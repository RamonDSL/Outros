const control_Arrows = document.querySelectorAll('.control')

let current_item = 0
const items = document.querySelectorAll('.item')
const maxItems = items.length


const movimentaSlide = (control) => {
    const isLeft = control.classList.contains('arrow-left')
    
    if (isLeft) {
        current_item -= 1
    } else {
        current_item += 1
    }

    if (current_item >= maxItems) {
        current_item = 0
    }

    if (current_item < 0) {
        current_item = maxItems - 1
    }

    items.forEach(item => {
        item.classList.remove('current-item')


        items[current_item].scrollIntoView({
            inline: "center",
            behavior: "smooth", // deixar a imagem rolando ao em vez de passar direto
            block: "nearest" // meio que ele deixa o slide "fixo". Por padrão o ScrollIntoView ele alinha no topo "start", e ao definir o nearest, ele deixa o slide "mais próximo", isso significa que ao clicar nos botões, mesmo o slide estando no centro, ele não se mexe, mas se o usuário descer a página e ficar visível parte do slide ou só os botões, ao clicar no botão ele leva o usuário ao slide, tornando a visualização melhor.
        })

        items[current_item].classList.add('current-item')
    })
}

control_Arrows.forEach(control => {
    control.addEventListener('click', () => movimentaSlide(control))
})

function clickButton() {

    clickEvent = new CustomEvent('click');
  
    isRight = document.querySelector(".arrow-right")
  
    isRight.dispatchEvent(clickEvent);
  
}   
  
function carouselRunning() {    
  
    setInterval(clickButton, 3000)   
}

carouselRunning()