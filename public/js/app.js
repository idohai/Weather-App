
const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')

const messageOne = document.querySelector("#message-1")
const messageTwo = document.getElementById("message-2")

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const url =  '/weather?address=' + searchInput.value
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    fetch(url).then((response) => {
    response.json().then((data) => {
        if (data.error){
            return messageOne.textContent = data.error
        }
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
    })
})
})

