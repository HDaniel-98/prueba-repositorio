const btnReserva = document.getElementById("btn-reserva");
const containerCita = document.getElementById("container-reserva");
const fondo = document.querySelector(".fondo-reserva");


btnReserva.addEventListener("click", () => {
     fondo.classList.toggle("visible");
     // containerCita.classList.toggle("pedirCita")
})

fondo.addEventListener("click", (event) => {
     if (event.target === fondo) {
          // containerCita.classList.remove('pedirCita');
          fondo.classList.remove("visible")
     }
})