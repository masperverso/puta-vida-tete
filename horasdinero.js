
function salario () {
	const plusasistencia=62.82;
	nominamensual=totaleurosemana[0]+plusasistencia;
	horasmensual=totalhorasemana[0];
	celda18=0;
	
	for(i=1;i<4;i++) {
		nominamensual=nominamensual+totaleurosemana[i];
		horasmensual=horasmensual+totalhorasemana[i];
	}
	
	for (j=0;j<7;j++) {

		celda18=f18.getElementsByTagName("td")[j];

		if (celda18.innerHTML==1){
			nominamensual=nominamensual+totaleurosusemana;
			horasmensual=horasmensual+totalhorasusemana;
			break;
		}
	}
	
	if (celda18.innerHTML!=1) {
			nominamensual=nominamensual+totaleurosemana[4]+totaleurosusemana;
			horasmensual=horasmensual+totalhorasemana[4]+totalhorasusemana;
	}
	
	document.getElementById('nominames').innerHTML = nominamensual.toFixed(2);
	document.getElementById('horasmes').innerHTML = horasmensual.toFixed(2);

}	

function cuentapluses () {

	for (i=0;i<7;i++) {

		for (j=1;j<4;j++) {
			if (selectsemana.value==j){

				celda5=f5.getElementsByTagName("td")[i];
				celda6=f6.getElementsByTagName("td")[i];
				celda8=f8.getElementsByTagName("td")[i];
				celdaunidades=filaunidades.getElementsByTagName("td")[i];
				horasnochemes[j*7+i]=celda6.innerHTML;
				horasdiarias[j*7+i]=celda5.innerHTML;
				eurosdiarios[j*7+i]=celda8.innerHTML;
				unidadesdiarias[j*7+i]=celdaunidades.innerHTML;

				if (i==6){
					festivasmes[j*7+i]=celda5.innerHTML;
				}

				if (celda5.innerHTML>0){

					transportemes[j*7+i]=1;

				}

				if (celda5.innerHTML==0){

					transportemes[j*7+i]=0;

				}

				madruguemes[j*7+i]=madruguesemana[i];
				supermadruguemes[j*7+i]=supermadruguesemana[i];
				dietames[j*7+i]=dietasemana[i];
				turnopartidomes[j*7+i]=turnopartidosemana[i];

			}
		}
	}

	if (selectsemana.value==4){

		noultima=0;
		celda18=0;
		for (j=0; j<7;j++){
			celda18=f18.getElementsByTagName("td")[j];
			
			if (celda18.innerHTML==1){
				noultima=noultima+1;
				alert ("5a semana sin dia 1",noultima);
			}

		}

		if (noultima==0){

			for (i=0;i<7;i++) {

				celda5=f5.getElementsByTagName("td")[i];
				celda6=f6.getElementsByTagName("td")[i];
				celda8=f8.getElementsByTagName("td")[i];
				celdaunidades=filaunidades.getElementsByTagName("td")[i];
				horasnochemes[28+i]=celda6.innerHTML;
				horasdiarias[28+i]=celda5.innerHTML;
				eurosdiarios[28+i]=celda8.innerHTML;
				unidadesdiarias[28+i]=celdaunidades.innerHTML;

				if (i==6){
					festivasmes[28+i]=celda5.innerHTML;
				}

				if (celda5.innerHTML>0){

					transportemes[28+i]=1;

				}

				else if (celda5.innerHTML==0){

					transportemes[28+i]=0;

				}

				madruguemes[28+i]=madruguesemana[i];
				supermadruguemes[28+i]=supermadruguesemana[i];
				dietames[28+i]=dietasemana[i];
				turnopartidomes[28+i]=turnopartidosemana[i];
			}

		}
	}
	
	console.log ("horasnochemes",horasnochemes);
	console.log("horasdiarias",horasdiarias);
	console.log("eurosdiarios",eurosdiarios);
	console.log("unidadesdiarias",unidadesdiarias);
	console.log ("festivasmes",festivasmes);
	console.log ("transportemes",transportemes);

	console.log ("dietasemana",dietasemana);
	console.log ("madruguesemana",madruguesemana);
	console.log ("supermadruguesemana",supermadruguesemana);
	console.log ("turnopartidosemana",turnopartidosemana);

	console.log ("dietasmes",dietames);
	console.log ("madruguesmes",madruguemes);
	console.log ("supermadruguesmes",supermadruguemes);
	console.log ("turnopartidosmes",turnopartidomes);
	
}

function comprobarnomina (){

	var nominacobrada1=parseInt(document.getElementById('nominacobrada').value);
	var atrasosnomina=parseInt(document.getElementById('atrasosnomina').value);

	var transportec=parseInt(document.getElementById('transportecobrada').value);
	var atrasostransporte=parseInt(document.getElementById('atrasostransporte').value);

	var transportemadruguec=parseInt(document.getElementById('transportemadruguecobrada').value);
	var atrasostransportemadrugue=parseInt(document.getElementById('atrasosmadrugue').value);

	var nocturnidadc=parseInt(document.getElementById('nocturnidadcobrada').value);
	var atrasosnocturnidad=parseInt(document.getElementById('atrasosnocturnidad').value);

	var festividadc=parseInt(document.getElementById('festividadcobrada').value);
	var atrasosfestividad=parseInt(document.getElementById('atrasosfestivas').value);

	var dietacobrada1=parseInt(document.getElementById('dietacobrada').value);

	var dietamadruguec=parseInt(document.getElementById('dietamadruguecobrada').value);
	var atrasosdietamadrugue=parseInt(document.getElementById('atrasossupermadrugue').value);

	var partido2horasmenosc=parseInt(document.getElementById('partido2horasmenos').value);
	var atrasospartidomenosde2horas=parseInt(document.getElementById('atrasospartido2horasmenos').value);

	var partido2horasmasc=parseInt(document.getElementById('partidomasde2horas').value);
	var atrasospartidomasde2horas=parseInt(document.getElementById('atrasospartido2horasmas').value);

	

	let unidadesmeslimpio = unidadesdiarias.filter(function (element) {
		return element !== 0;
		  }
		);

		alert ("unidades mes limpio"+unidadesmeslimpio);

	let diastrabajados=unidadesmeslimpio.length;
	
	alert ("dias trabajados"+diastrabajados);
		//sumar arrays para computo

	if (diastrabajados>28) {
		
		var unidadesmes=0;
		var nochesmestotal=0;
		var festivasmestotal=0;
		var madruguestotales=0;
		var transportestotales=0;
		var supermadruguestotal=0;
		var partidosmenos2horastotal=0;
		var partidomas2horastotal=0;

		for (i=0;i<unidadesmeslimpio.length; i++) {
			unidadesmes +=parseFloat(unidadesmeslimpio[i]);
		}
	
		let horasnochesmestotal = horasnochemes.filter(function (element) {
			return element != null;
			  }
		);
	
		for (i=0;i<horasnochesmestotal.length; i++) {
			nochesmestotal +=parseFloat(horasnochesmestotal[i]);
		}
	
		let festivasmeslimpio = festivasmes.filter(function (element) {
			return element != null;
			  }
		);
	
		for (i=0;i<festivasmeslimpio.length; i++) {
			festivasmestotal +=parseFloat(festivasmeslimpio[i]);
		}
	
		let madruguesmeslimpio = madruguemes.filter(function (element) {
			return element != null;
			}
		);
	
		for (i=0;i<madruguesmeslimpio.length; i++) {
			madruguestotales += madruguesmeslimpio[i];
		}
	
		let transportemeslimpio = transportemes.filter(function (element) {
			return element != null;
			  }
		);
	
		for (i=0;i<transportemeslimpio.length; i++) {
			transportestotales += transportemeslimpio[i];
		}
	
		let supermadruguemeslimpio = supermadruguemes.filter(function (element) {
			return element != null;
			  }
		);
	
		for (i=0;i<supermadruguemeslimpio.length; i++) {
			supermadruguestotal += supermadruguemeslimpio[i];
		}

		let partidosmenos2horastotallimpio = turnopartidomes.filter(function (element) {
			return element !== 2;
			  }
		);

		for (i=0;i<partidosmenos2horastotallimpio.length; i++) {
			partidosmenos2horastotal += partidosmenos2horastotallimpio[i];
		}

		let partidosmas2horastotallimpio = turnopartidomes.filter(function (element) {
			return element !== 1;
			  }
		);

		for (i=0;i<partidosmas2horastotallimpio.length; i++) {
			partidomas2horastotal += (partidosmenos2horastotallimpio[i]/2);
		}
	
		console.log ("unidades mensuales",unidadesmes);
		console.log ("nocturnidades mensuales",nochesmestotal);
		console.log ("festivas mensuales",festivasmestotal);
		console.log ("madrugues mensuales",madruguestotales);
		console.log ("transportes mensuales",transportestotales);
		console.log ("supermadrugues mensuales",supermadruguestotal);
		console.log ("partidos menos de 2 horas",partidosmenos2horastotal);
		console.log ("partidos mas de 2 horas",partidomas2horastotal);

		var nominadebida=nominamensual-nominacobrada1-atrasosnomina;
		var transportedebido=transportestotales-transportec-atrasostransporte;
		var transportemadruguedebido=madruguestotales-transportemadruguec-atrasostransportemadrugue;
		var nocturnidadebido=nochesmestotal-nocturnidadc-atrasosnocturnidad;
		var festividadebido=festivasmestotal-festividadc-atrasosfestividad;
		var supermadruguedebido=supermadruguestotal-dietamadruguec-atrasosdietamadrugue;
		var partidosmenos2horasdebido=partidosmenos2horastotal-partido2horasmenosc-atrasospartidomenosde2horas;
		var partidomas2horasdebido=partidomas2horastotal-partido2horasmasc-atrasospartidomasde2horas;
	
		document.getElementById('nominadebida').innerHTML = nominadebida.toFixed(2);
		//document.getElementById('unidadesdebida').innerHTML = unidadesmes.toFixed(2);
		document.getElementById('nocturnidadevida').innerHTML = nocturnidadebido.toFixed(2);
		document.getElementById('festividadebida').innerHTML = festividadebido.toFixed(2);
		document.getElementById('madruguedebido').innerHTML = transportemadruguedebido.toFixed(2);
		document.getElementById('transportedebido').innerHTML = transportedebido.toFixed(2);
		document.getElementById('dietadebidomadrugue').innerHTML = supermadruguedebido.toFixed(2);
		document.getElementById('partido2horasmenosdebido').innerHTML = partidosmenos2horasdebido.toFixed(2);
		document.getElementById('partido2horasmasdebido').innerHTML = partidomas2horasdebido.toFixed(2);

	}

	else {
		alert ("Debes introducir todo el mes para comprobar la nomina");
	}
		
}



