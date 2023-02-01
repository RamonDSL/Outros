//Modo prática
//document.querySelector('form').addEventListener('submit', event => event.preventDefault())

const fields = document.querySelectorAll('[required')

function ValidadeField(field) {
    function verifyErrors() {
        let foundError = false

        for (const error in field.validity) {
            if (field.validity[error] && !field.validity.valid)
                foundError = error
        }

        return foundError
    }

    function setCustomMessage(mensage) {
        const spanError = field.parentNode.querySelector('span.error')

        if (mensage) {
            spanError.classList.add('actived')
            spanError.innerHTML = mensage
        } else {
            spanError.classList.remove('actived')
            spanError.innerHTML = ''
        }
    }

    function customMessage(typeError) {
        const mensagem = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email obrigatório",
                typeMismatch: "Preenchao com um email válido"
            }
        }

        return mensagem[field.type][typeError]
    }

    return function() {
        const error = verifyErrors()

        if(error) {
            const mensage = customMessage(error)            
            setCustomMessage(mensage)
        } else {
            field.style.borderColor = 'green'
            setCustomMessage()
        }
    }
}

function customValidation(event) {   
    const field = event.target
    const validation = ValidadeField(field)
    validation()
}


for (field of fields) {
    field.addEventListener('invalid', event => {
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener('blur', customValidation)
}