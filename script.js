const botones = document.querySelectorAll(".proyecto-btn");
const descripcion = document.querySelectorAll(".descripcion");

let actual = 0;
const visible = 3;
const lista = document.querySelector(".proyectos-lista");
const total  = botones.length;
const btnAncho = 160;

botones.forEach (boton => {
    boton.addEventListener("click", () => {
        botones.forEach (b => b.classList.remove("activo"));
        boton.classList.add("activo");

        const id = boton.dataset.proyectos;
        descripcion.forEach (d => d.classList.add("oculto"));
        document.getElementById(`descripcion-${id}`).classList.remove("oculto");
    })
});

function mover(direccion) {
    const indiceMaximo = total - visible;
    actual = Math.min(Math.max(actual + direccion, 0), indiceMaximo);
    lista.style.transform = `translateX(-${actual * btnAncho}px)`;
}

document.getElementById("izquierda").addEventListener("click", () => mover(-1));
document.getElementById("derecha").addEventListener("click",() => mover(1));