function aplicarColores() {
    var celdasValor = document.querySelectorAll("#comprobarnomina tbody td:nth-child(4)");

    celdasValor.forEach(function(celda) {
      var valor = parseFloat(celda.textContent);
  
      if (valor > 0) {
        celda.classList.add("positivo");
      } else if (valor < 0) {
        celda.classList.add("negativo");
      }
    else if (valor==0) {
      celda.classList.add("zero");
    }
    });
  }
  

  