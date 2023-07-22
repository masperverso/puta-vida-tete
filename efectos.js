 document.getElementById("iconotransporte").addEventListener("mouseover", function() {
    this.title = transporte.toString();
  });

  document.getElementById("iconomadrugador").addEventListener("mouseover", function() {
    this.title = transporte.toString();
  });

  document.getElementById("iconoamanecer").addEventListener("mouseover", function() {
    this.title = plusmadrugue.toString();
  });

  document.getElementById("iconosuperman3").addEventListener("mouseover", function() {
    this.title = plusupermadrugue.toString();
  });

  document.getElementById("iconomedia-luna").addEventListener("mouseover", function() {
    this.title = nocturnas.toString();
  });

  document.getElementById("iconosigno-menos").addEventListener("mouseover", function() {
    this.title = partido1hora.toString();
  });

  document.getElementById("iconomas").addEventListener("mouseover", function() {
    this.title = partido2hora.toString();
  });

  document.getElementById("iconodesayuno").addEventListener("mouseover", function() {
    this.title = dietadesayuno.toString();
  });

  document.getElementById("iconocomiendo").addEventListener("mouseover", function() {
    this.title = dietacomida.toString();
  });

  editarperfil.addEventListener('click', () => {
    zonausuario.style.display = 'block';
  });