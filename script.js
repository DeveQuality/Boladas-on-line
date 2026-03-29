let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

menuBtn.onclick = function () {
    menu.classList.toggle("active");
};

// ABRIR DIALOG CORRETO
document.querySelectorAll(".img img").forEach(img => {
    img.addEventListener("click", () => {
        const dialog = img.parentElement.querySelector("dialog");
        dialog.showModal();

        // BLOQUEAR SCROLL
        document.body.classList.add("no-scroll");
    });
});

// FECHAR DIALOG
document.querySelectorAll(".fechar_dialog").forEach(btn => {
    btn.addEventListener("click", () => {
        const dialog = btn.closest("dialog");
        dialog.close();

        // LIBERAR SCROLL
        document.body.classList.remove("no-scroll");
    });
});

// TROCAR IMAGEM
function trocar(el) {
    const dialog = el.closest("dialog");
    const imgGrande = dialog.querySelector("#imgGrande");
    imgGrande.src = el.src;
}

// FECHAR CLICANDO FORA
document.querySelectorAll("dialog").forEach(dialog => {
    dialog.addEventListener("click", e => {
        if (e.target === dialog) {
            dialog.close();

            // LIBERAR SCROLL
            document.body.classList.remove("no-scroll");
        }
    });
});