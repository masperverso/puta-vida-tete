nocheyfiesta();

function convertirUnidades(valorInput1, valorInput2, factorConversion) {
  const value = parseFloat(valorInput1.value);
  if (!isNaN(value)) {
    valorInput2.value = (value * factorConversion).toFixed(2);
  } else {
    valorInput2.value = '';
  }
}

function convertirUnidadesInverso(valorInput1, valorInput2, factorConversion) {
  const value = parseFloat(valorInput2.value);
  if (!isNaN(value)) {
    valorInput1.value = (value / factorConversion).toFixed(2);
  } else {
    valorInput1.value = '';
  }
}

