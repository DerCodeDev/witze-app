let jokeField = document.getElementById("joke")
let answerField = document.getElementById("answer")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")

const URL = "https://v2.jokeapi.dev/joke/Any?lang=de"


function clickStartButton() {
    window.location.href = "/joke.html"
}

function getJoke() {

    if(button2.textContent == "Weiter!") {
        answerField.innerText = ""
        button1.style.visibility = 'visible';
        button2.textContent  = "Kenn ich schon!"
    }

    fetch(URL)
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(data => {
            jokeField.innerText = data.setup
            button1.addEventListener("click",() => {
                answerField.innerText = data.delivery
                button1.style.visibility = 'hidden';
                button2.textContent  = "Weiter!"
            })
        })

}

if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js');
  }
