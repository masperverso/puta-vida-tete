document.getElementById("guardarTabla").addEventListener("click", function() {
  var tabla = document.getElementById("diasc");
  var filas = tabla.getElementsByTagName("tr");
  var contenidoHTML = "<table>\n";
  
  for (var i = 0; i < filas.length; i++) {
    var celdas = filas[i].querySelectorAll("th, td"); // Capturar tanto los elementos <th> como los <td>
    contenidoHTML += "<tr>\n";
  
    for (var j = 0; j < celdas.length; j++) {
      var color = window.getComputedStyle(celdas[j]).color;
      var contenidoCelda = celdas[j].innerHTML.replace(/\n/g, "<br>");
      
      if (celdas[j].tagName === "TH") {
        contenidoHTML += `<th style="color: ${color}">${contenidoCelda}</th>\n`; // Guardar el elemento <th> con el estilo de color
      } else {
        contenidoHTML += `<td style="color: ${color}">${contenidoCelda}</td>\n`; // Guardar el elemento <td> con el estilo de color
      }
    }
  
    contenidoHTML += "</tr>\n";
  }
  
  contenidoHTML += "</table>";
  
  var blob = new Blob([contenidoHTML], {type: "text/html;charset=utf-8"});
  saveAs(blob, tit.innerHTML + ".html");
});

function cargarTablaDesdeHTML() {
  var input = document.createElement("input");
  input.type = "file";
  
  input.addEventListener("change", function(event) {
    var archivo = event.target.files[0];
    var lector = new FileReader();
  
    lector.onload = function(e) {
      var contenido = e.target.result;
      var divTemp = document.createElement("div");
      divTemp.innerHTML = contenido;
  
      var tablaNueva = divTemp.querySelector("table");
      if (tablaNueva) {
        var tablaActual = document.getElementById("diasc");
        tablaActual.innerHTML = tablaNueva.innerHTML;
  
        console.log("Tabla cargada desde archivo HTML");
      } else {
        console.log("No se encontró una tabla en el archivo HTML");
      }
    };
  
    lector.readAsText(archivo);
  });
  
  input.click();
}








  