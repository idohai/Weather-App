
const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')

const messageOne = document.querySelector("#message-1")
const messageTwo = document.getElementById("message-2")
const messageThree = document.getElementById("message-3")

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const url =  '/weather?address=' + searchInput.value
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    messageThree.textContent = ""
    fetch(url).then((response) => {
    response.json().then((data) => {
        if (data.error){
            return messageOne.textContent = data.error
        }
        messageOne.textContent = data.location +', ' + data.observation_time
        messageTwo.textContent = data.forecast
        messageThree.textContent = data.humidity
    })
})
})

