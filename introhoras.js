const selectInicio = document.getElementById("inicio");

const selectfinal = document.getElementById("final");

const selectInicio2 = document.getElementById("inicio2");


const selectfinal2 = document.getElementById("final2");

for (let i = 0; i <= 23; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectInicio.appendChild(option);
  
}

for (let i = 0; i <= 23; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectInicio2.appendChild(option);
}

for (let i = 0; i <= 23; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectfinal.appendChild(option);
    
}

for (let i = 0; i <= 23; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectfinal2.appendChild(option);
    
}

 
  
