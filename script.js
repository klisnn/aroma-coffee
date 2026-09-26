function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

function sendMessage(event) {
    event.preventDefault();

    alert("Рақмет! Хабарламаңыз сәтті жіберілді.");

    event.target.reset();
}
