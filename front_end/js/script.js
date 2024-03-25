const departMinutes = 0.5
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(function(event){
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1

  if (temps <= 0) {
    let alerte = document.getElementById("alerte");
    alerte.style.display = "flex";

    let audio = document.getElementById("son");

      audio.play();
    
} 
}, 1000)

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "v") {

      let alerte = document.getElementById("alerte");
      alerte.style.display = "flex";

      let audio = document.getElementById("son");

      audio.play();
  } 
});

document.addEventListener('contextmenu', function(event){
  let alerte = document.getElementById("alerte");
  alerte.style.display = "flex";

  let audio = document.getElementById("son");

      audio.play();
})

document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    let alerte = document.getElementById("alerte");
    alerte.style.display = "flex";

    let audio = document.getElementById("son");

    audio.play();
  } 
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', async function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      try {
          const response = await fetch('http://localhost:3000/api/v1/eleve', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ nom: formData.get('nom'), reponse1: formData.get('reponse1') })
          });
          const data = await response.json();
      } catch (error) {
          console.error(error);
      }
  });
});