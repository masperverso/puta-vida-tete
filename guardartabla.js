

//document.getElementById("guardarTabla").addEventListener("click", function() {
  //  var tabla = document.getElementById("diasc");
 //   var contenidoHTML = tabla.innerHTML;
 //   var blob = new Blob([contenidoHTML], {type: "text/html"});
 //   saveAs(blob, "mi_tabla.html");
//  });

  document.getElementById("guardarTabla").addEventListener("click", function() {
    var tabla = document.getElementById("diasc");
    var filas = tabla.getElementsByTagName("tr");
    var contenidoCSV = "";
  
    for (var i = 0; i < filas.length; i++) {
      var celdas = filas[i].getElementsByTagName("td");
      var filaCSV = [];
  
      for (var j = 0; j < celdas.length; j++) {
        filaCSV.push(celdas[j].innerText);
      }
  
      contenidoCSV += filaCSV.join(",") + "\n";
    }
  
    var blob = new Blob([contenidoCSV], {type: "text/csv;charset=utf-8"});
    saveAs(blob, "mi_tabla.csv");
  });
  
  