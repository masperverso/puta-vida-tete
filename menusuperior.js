function toggleDiv(divId) {
    var div = document.getElementById(divId);

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function toggleColor(img) {
    img.classList.toggle("active");
}
