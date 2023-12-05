var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

// garante que o menu esteja escondido ao carregar a página
hideMenu();


document.querySelectorAll('.album').forEach(album => {
    album.addEventListener('click', () => {
        album.classList.toggle('flipped');
    });
});