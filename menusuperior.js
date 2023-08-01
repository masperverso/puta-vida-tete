function toggleDiv(divId) {
    var div = document.getElementById(divId);
    div.style.display = div.style.display === "none" ? "block" : "none";
}

function toggleColor(img) {
    // Verificamos si la imagen tiene la clase "grayscale"
    var isGrayscale = img.classList.contains("grayscale");

    // Si es escala de grises, la eliminamos; si no, la agregamos
    if (isGrayscale) {
        img.classList.remove("grayscale");
    } else {
        img.classList.add("grayscale");
    }
}





