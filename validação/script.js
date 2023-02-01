document.querySelector('form').addEventListener('submit', event => {
    console.log('pode enviar o formulário');
    event.preventDefault()
})

const fields = document.querySelectorAll('[required]') // procure todas as tags com atributo required

//console.log(fields);
function ValidadeField(field) {
    // lógica para verificar se existem errors
    function verifyErrors() {
        let foundError = false; // sem começar a procurar vai começar como falso, claro.        

        for(const error in field.validity) {
            // se não for customError que vai ficar true pq estou usando o setCustomValidity
            // então verifica se tem erro; field.validity[error] acessar o valor do erro
            // está dizendo que aceita o erro desde que o valid seja falso, porque se ele for true não tem erro
            if (field.validity[error] && !field.validity.valid) { // error !== 'customError' && tirado do if pq sem o setCustomValidity ele fica false
                foundError = error
            }
        }

        return foundError
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Porfavor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector('span.error') //subiu para o pai do field
        if (message) {
            spanError.classList.add('active')
            spanError.innerHTML = message
        } else {
            spanError.classList.remove('active')
            spanError.innerHTML = '' 
        }        
    }

    return function() {

        const error = verifyErrors()
        

        if (error) {
            const message = customMessage(error)
            setCustomMessage(message)     
        } else {
            field.style.borderColor = 'green'
            setCustomMessage()
        }
    }
}

function customValidation(event) {
    // eliminar o bubble (a mensagem de invalido/campo obrigatório)
    //event.preventDefault()
    const field = event.target // alvo que disparou o evento, o alvo que disparou o evento invalid é o filed
    const validation = ValidadeField(field)
    validation()
    /* se tornou inutil por causa do preventDefault que não deixa surgir mensagem
    if (error) {
        // trocar mensagem de required
        field.setCustomValidity('Esse campo é obrigatório') // quando usa setCustomValidity temos que fazer uma lógica para resetar o setCustomValidity e entender que não é para falar toda vez que esse campo é obrigatório, porque ao usá-lo dentro de field.validity, dentro dele tem vários tipos de erros, a propriedade customError fica sempre como se tivesse um erro customizado
    } else {
        field.setCustomValidity("") //reiniciando o valor
    }   */
}

for (field of fields) {
    field.addEventListener('invalid', event => {
        // eliminar o bubble (a mensagem de invalido/campo obrigatório)
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener('blur', customValidation)
}