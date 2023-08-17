nocheyfiesta();

const festividadInput1 = document.getElementById('festividadcobrada');
const festividadInput2 = document.getElementById('festividadcobradaeuros');

const transportemadrugueInput1 = document.getElementById('transportemadruguecobrada');
const transportemadrugueInput2 = document.getElementById('transportemadrugueeuros');

const transporteInput1 = document.getElementById('transportecobrada');
const transporteInput2 = document.getElementById('transporteeuros');

const nocturnidadInput1 = document.getElementById('nocturnidadcobrada');
const nocturnidadInput2 = document.getElementById('nocturnidadcobradaeuros');

const dietamadrugueInput1 = document.getElementById('dietamadruguecobrada');
const dietamadrugueInput2 = document.getElementById('dietamadruguecobradaeuros');

const partido2horasmenosInput1 = document.getElementById('partido2horasmenos');
const partido2horasmenosInput2 = document.getElementById('partido2horasmenoseuros');

const partidomasde2horasInput1 = document.getElementById('partidomasde2horas');
const partidomasde2horasInput2 = document.getElementById('partidomasde2horaseuros');


function convertirHorasAEuros() {
  const value = parseFloat(festividadInput1.value);
  if (!isNaN(value)) {
    festividadInput2.value = (value * festivas).toFixed(2);
  } else {
    festividadInput2.value = '';
  }
}

function convertirEurosAHoras() {
  const value = parseFloat(transportemadrugueInput2.value);
  if (!isNaN(value)) {
    festividadInput1.value = (value / festivas).toFixed(2);
  } else {
    festividadInput1.value = '';
  }
}

function convertirHorasAEuros2() {
    const value = parseFloat(transportemadrugueInput1.value);
    if (!isNaN(value)) {
        transportemadrugueInput2.value = (value * plusmadrugue).toFixed(2);
    } else {
        transportemadrugueInput2.value = '';
    }
  }
  
  function convertirEurosAHoras2() {
    const value = parseFloat(transportemadrugueInput2.value);
    if (!isNaN(value)) {
        transportemadrugueInput1.value = (value / plusmadrugue).toFixed(2);
    } else {
        transportemadrugueInput1.value = '';
    }
  }

  function convertirHorasAEuros3() {
    const value = parseFloat(transporteInput1.value);
    if (!isNaN(value)) {
        transporteInput2.value = (value * plusmadrugue).toFixed(2);
    } else {
        transporteInput2.value = '';
    }
  }
  
  function convertirEurosAHoras3() {
    const value = parseFloat(transporteInput2.value);
    if (!isNaN(value)) {
        transporteInput1.value = (value / plusmadrugue).toFixed(2);
    } else {
        transporteInput1.value = '';
    }
  }

  function convertirHorasAEuros4() {
    const value = parseFloat(nocturnidadInput1.value);
    if (!isNaN(value)) {
        nocturnidadInput2.value = (value * nocturnas).toFixed(2);
    } else {
        nocturnidadInput2.value = '';
    }
  }
  
  function convertirEurosAHoras4() {
    const value = parseFloat(nocturnidadInput2.value);
    if (!isNaN(value)) {
        nocturnidadInput1.value = (value / nocturnas).toFixed(2);
    } else {
        nocturnidadInput1.value = '';
    }
  }

  function convertirHorasAEuros5() {
    const value = parseFloat(dietamadrugueInput1.value);
    if (!isNaN(value)) {
        dietamadrugueInput2.value = (value * plusupermadrugue).toFixed(2);
    } else {
        dietamadrugueInput2.value = '';
    }
  }
  
  function convertirEurosAHoras5() {
    const value = parseFloat(dietamadrugueInput2.value);
    if (!isNaN(value)) {
        dietamadrugueInput1.value = (value / plusupermadrugue).toFixed(2);
    } else {
        dietamadrugueInput1.value = '';
    }
  }

  function convertirHorasAEuros6() {
    const value = parseFloat(partido2horasmenosInput1.value);
    if (!isNaN(value)) {
        partido2horasmenosInput2.value = (value * partido1hora).toFixed(2);
    } else {
        partido2horasmenosInput2.value = '';
    }
  }
  
  function convertirEurosAHoras6() {
    const value = parseFloat(partido2horasmenosInput2.value);
    if (!isNaN(value)) {
        partido2horasmenosInput1.value = (value / partido1hora).toFixed(2);
    } else {
        partido2horasmenosInput1.value = '';
    }
  }

  function convertirHorasAEuros7() {
    const value = parseFloat(partidomasde2horasInput1.value);
    if (!isNaN(value)) {
        partidomasde2horasInput2.value = (value * partido2hora).toFixed(2);
    } else {
        partidomasde2horasInput2.value = '';
    }
  }
  
  function convertirEurosAHoras7() {
    const value = parseFloat(partidomasde2horasInput2.value);
    if (!isNaN(value)) {
        partidomasde2horasInput1.value = (value / partido2hora).toFixed(2);
    } else {
        partidomasde2horasInput1.value = '';
    }
  }
