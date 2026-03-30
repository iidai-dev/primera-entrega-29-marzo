// CARGAR NAVBAR
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    iniciarNavbar();
  })
  .catch(err => console.error("Error cargando navbar:", err));


// FUNCIÓN PRINCIPAL
function iniciarNavbar() {

    activarSubmenus();

    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay-menu");

    if (hamburger && menu && overlay) {

        // abrir / cerrar menú
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            menu.classList.toggle("show");
            overlay.classList.toggle("show");
        });

        // evitar que se cierre al tocar dentro del menú
        menu.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        // cerrar tocando el fondo
        overlay.addEventListener("click", () => {
            menu.classList.remove("show");
            overlay.classList.remove("show");
        });

        // cerrar menú al tocar una opción
        document.querySelectorAll(".menu a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("show");
                overlay.classList.remove("show");
            });
        });

    }
}


// SUBMENÚS
function activarSubmenus() {
    document.querySelectorAll(".dropdown-sub .toggle").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            let submenu = btn.parentElement.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle("show");
            }
        });
    });
}


// ROBOT (opcional)
window.addEventListener("load", () => {
    const robot = document.querySelector(".robot");
    if (robot) {
        robot.style.animationPlayState = "running";
    }
});