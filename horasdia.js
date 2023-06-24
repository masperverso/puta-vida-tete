//empieza calculo horas

f0=document.getElementById("fila0");
f1=document.getElementById("fila1");
f2=document.getElementById("fila2");
f3=document.getElementById("fila3");
f4=document.getElementById("fila4");
f5=document.getElementById("fila5");
f6=document.getElementById("fila6");
f7=document.getElementById("fila7");
f8=document.getElementById("fila8");
f9=document.getElementById("fila9");
f10=document.getElementById("fila10");
f11=document.getElementById("fila11");
f12=document.getElementById("fila12");
f13=document.getElementById("fila13");
f14=document.getElementById("fila14");
f15=document.getElementById("fila15");
f16=document.getElementById("fila16");
f17=document.getElementById("fila17");
f18=document.getElementById("fila18");
f19=document.getElementById("fila19");
f20=document.getElementById("fila20");
f21=document.getElementById("fila21");
f30=document.getElementById("fila30");
f31=document.getElementById("fila31");
f32=document.getElementById("fila32");
f33=document.getElementById("fila33");
f34=document.getElementById("fila34");
f35=document.getElementById("fila35");

filahoras=document.getElementById("filahoras");
filaeuros=document.getElementById("filaeuros");

filaunidades=document.getElementById("filaunidades");

var horasc=0;
let totaleuros1semana=0;
let totaleurosusemana=0;
let totalhoras1semana=0;
let totalhorasusemana=0;

var horasnochemes=[];
var horasdiarias=[];

var eurosdiarios=[];
var unidadesdiarias=[0];

var festivasmes=[];
var transportemes=[];

var madruguesemana=[0,0,0,0,0,0,0];
var supermadruguesemana=[0,0,0,0,0,0,0];

var madruguemes=[];
var supermadruguemes=[];

var dietasemana=[0,0,0,0,0,0,0];
var dietames=[];

var turnopartidosemana=[0,0,0,0,0,0,0];
var turnopartidomes=[];

let madruguestotales=0;
let transportestotales=0;
var unidadesmes=0;
var	nochesmestotal=0;
var supermadruguestotal=0;
var festivasmestotal=0;

primeralinea();
partido();
ultimalinea();

function primeralinea() {
	for (i=0;i<8;i++) {
		celda0=f0.getElementsByTagName("th")[i];
		celda0.innerHTML=lasemana[i];
		}
}

function ultimalinea() {
	for (i=0;i<8;i++) {
		celda0=f8.getElementsByTagName("th")[i];
		celda0.innerHTML=Horascsemanales[i];
		}
}

//check_turno_partido.prop('checked', false);

function funcion_inicial(){

	var inputs = document.getElementsByTagName('input');

	for (var i=0; i<inputs.length; i++)  {
  		if (inputs[i].type == 'checkbox')   {
    		inputs[i].checked = false;
  		}
	}
}

function partido()
{

    if(check_turno_partido.checked) {
		
		document.getElementById('timepickerinicio2').style.display = 'inline';
		document.getElementById('timepickerfinal2').style.display = 'inline';

		document.getElementById("fila3").style.visibility = "visible"; 
		document.getElementById("fila4").style.visibility = "visible";
	}
	else 
	{
		document.getElementById('timepickerinicio2').style.display = 'none';
		document.getElementById('timepickerfinal2').style.display = 'none';

		document.getElementById("fila3").style.visibility = "collapse";
		document.getElementById("fila4").style.visibility = "collapse";
	}
}

function horitas() {
    
// variables en funcion rango salarial
    var nocturnas = 0;
    var festivas = 0;
    var sb001=0;	
    var pp033=0;
    var	ct010=0;
    var	pa009=0;
    var	pcdsa321=0;
    var	pa036=0;

// leer variables de pantalla

	const tiempoinicio = selectedTimeinicio.selectedDates[0];
	var selecthorai1 = parseInt(tiempoinicio.getHours());
	var mini1 = parseInt(tiempoinicio.getMinutes());

	const tiempofinal = selectedTimefinal.selectedDates[0];
	var selecthoraf1 = parseInt(tiempofinal.getHours());
	var mint1 = parseInt(tiempofinal.getMinutes());

	const tiempoinicio2 = selectedTimeinicio2.selectedDates[0];
	var selecthorai2 = parseInt(tiempoinicio2.getHours());
	var mini2 = parseInt(tiempoinicio2.getMinutes());

	const tiempofinal2 = selectedTimefinal2.selectedDates[0];
	var selecthoraf2 = parseInt(tiempofinal2.getHours());
	var mint2 = parseInt(tiempofinal2.getMinutes());

	var horaf1=selecthoraf1 + (mint1/60);
	var horai1=selecthorai1 + (mini1/60);
	var horaf2=selecthoraf2 + (mint2/60);
	var horai2=selecthorai2 + (mini2/60);

	if (horai1 > 12 && horaf1 < 12 && horaf1+24-horai1 >2 ) {
		horaf1=horaf1+24;	
	}
                         
	var horast=horaf1-horai1+horaf2-horai2;

	//alert ("horas totales"+horast +"<br>"+ horai1+" "+horaf1+" "+horai2+" "+horaf2);

	var unidades=horast*106.69/100*0.175;

	unidades=parseFloat(unidades.toFixed(2));

	//alert ("unidades"+unidades);
    // calculo variables en funcion rango

	for(i=0;i<4;i++) {
				
		if (nivelsalarial.value==i){
			
			sb001=sueldobase[i]/30*unidades;
			sb001= parseFloat(sb001.toFixed(2));
			pp033=primaproductividad[i]/30*unidades;
			pp033= parseFloat(pp033.toFixed(2));
			ct010=complementotransitorio[i]/30*unidades;
			ct010= parseFloat(ct010.toFixed(2));

			pa009=plusadicional/30*unidades;
			pa009= parseFloat(pa009.toFixed(2));

			pcdsa321=complementodsa/30*unidades;
			pcdsa321= parseFloat(pcdsa321.toFixed(2));

			pa036=plusarea/30*unidades;
			pa036= parseFloat(pa036.toFixed(2));

			for (j=0;j<4;j++){

				if (trienios.value==j){

					nocturnas=(horabase[i]+(trieniohorabase[j]*j))*40/100;
					nocturnas=nocturnas+nocturnas*86.45/100;
					nocturnas=parseFloat(nocturnas.toFixed(2));

            		festivas=(horabase[i]+(trieniohorabase[j]*j))*134.75/100;
            		festivas=parseFloat(festivas.toFixed(2));
			
				}
			}

			horasc =sb001 + pp033 + ct010 + pa009 + pcdsa321 + pa036 ;

		}
	}

	horasc=horasc + transporte;

	var desglose = "\n"+"<img src=bicicleta-de-reparto.png width=\"25\"+ height=\"25\">";	

	if(check_turno_partido.checked ) {
	
		if (horai2-horaf1 <= 2) {
			horasc=horasc+partido1hora;
			desglose+= "<img src=signo-menos.png width=\"25\"+ height=\"25\">";
			
			turnopartidosemana [buscadia.value]=1;
		}

		else {
			turnopartidosemana [buscadia.value]=0;
		}

		if (horai2-horaf1 <= 3 && horai2-horaf1 > 2 ) {
			horasc=horasc+partido2hora;
			desglose+= "<img src=mas.png width=\"25\"+ height=\"25\">";

			turnopartidosemana [buscadia.value]=2;
		}

		else {
			turnopartidosemana [buscadia.value]=0;
		}
	}

	if (horai1 >= 3 && horai1 < 6) {
   		horasc = horasc + plusupermadrugue;
		desglose += "<img src=superman3.png width=\"25\"+ height=\"25\">";

		supermadruguesemana[buscadia.value]=1;
	}

	else {
		supermadruguesemana[buscadia.value]=0;
	}

	if (horai1>=3 && horai1<7) {
   		horasc = horasc + plusmadrugue;
 		desglose += "<img src=amanecer.png width=\"25\">";

		madruguesemana[buscadia.value]=1;
	}

	else {
		madruguesemana[buscadia.value]=0;
	}

	if (horai1 <= 13 && horaf1 >= 15.5 && horast >= 5) {
		horasc = horasc + dietacomida;
		desglose += "<img src=comiendo.png width=\"25\"+ height=\"25\">";

		dietasemana [buscadia.value]=1;
	}

	else if (horai2 <= 13 && horaf2 >= 15.5 && horast >= 5) {
		horasc = horasc + dietacomida;
		desglose += "<img src=comiendo.png width=\"25\"+ height=\"25\">";

		dietasemana [buscadia.value]=1;
	}

	else if (horai1 <= 20.5 && horaf1 >= 23 && horast >= 5) {
		horasc = horasc + dietacomida;
		desglose += "<img src=comiendo.png width=\"25\"+ height=\"25\">";

		dietasemana [buscadia.value]=1;
	}

	else if (horai2 <= 20.5 && horaf2 >= 23 && horast >= 5) {
		horasc = horasc + dietacomida;
		desglose += "<img src=comiendo.png width=\"25\"+ height=\"25\">";

		dietasemana [buscadia.value]=1;
	}

	else {
		dietasemana [buscadia.value]=0;
	}

	if (horai1 >= 5 && horai1<=6 && horaf1-horai1 >= 5) {
		horasc = horasc + dietadesayuno;
		desglose += "<img src=desayuno.png width=\"25\"+ height=\"25\">";

		dietasemana [buscadia.value]=2;
	}

// nocturnidad
	var noche=0;

	if (horai1>=21 && horast <= 9) {
		horasc = horasc + horast*nocturnas;
		desglose += "<img src=media-luna.png width=\"25\"+ height=\"25\">";
		noche=horast;
	}

	else if (horaf1 > 21) {
		horasc = horasc + (horaf1-21)*nocturnas;
		desglose += "<img src=media-luna.png width=\"25\"+ height=\"25\">";
		noche=horaf1-21;
	}

	else if (horai1<6 && horaf1 <= 6 ) {
		horasc = horasc + (horaf1-horai1)*nocturnas;
		desglose += "<img src=media-luna.png width=\"25\"+ height=\"25\">";
		noche=horaf1-horai1;
	}

	else if (horai1<6 && horaf1 >= 6 && (3-horai1) >=0) {
		horasc = horasc + horast*nocturnas;
		desglose += "<img src=media-luna.png width=\"25\"+ height=\"25\">";
		noche=horast;
	}

	else if (horai1<6 && horaf1>6 && (3-horai1)<0){
		horasc = horasc + (6-horai1)*nocturnas;
		desglose += "<img src=media-luna.png width=\"25\"+ height=\"25\">";
		noche=6-horai1;
	}

//festividad

	if (buscadia.value==6) {

	horasc = horasc + horast*festivas;
	}

// error horas introducidas

	if (horaf1<horai1+2){
		alert("horas introducidas incorrectas"+"<br>"+"la hora de inicio deve ser mayor que la hora final y superior a 2 horas");
		horasc=0;
		desglose="<img src=calendario.png width=\"25\"+ height=\"25\">";
	}

	else if (horast>9){
		alert("horas introducidas incorrectas"+"<br>"+"El turno deve ser menor de 9 horas");
		horasc=0;
		desglose="<img src=calendario.png width=\"25\"+ height=\"25\">";
	}

	else if (check_turno_partido.checked && horaf2<horai2+2){
		alert("horas introducidas incorrectas"+"<br>"+"la hora de reinicio deve ser mayor que la hora final");
		horasc=0;
		desglose="<img src=calendario.png width=\"25\"+ height=\"25\">";
	}

	else if (check_turno_partido.checked && horai2<=horai1){
		alert("horas introducidas incorrectas"+"<br>"+"la hora reentrada deve ser mayor que la hora de inicio");
		horasc=0;
		desglose="<img src=calendario.png width=\"25\"+ height=\"25\">";
	}

	else if (check_turno_partido.checked && horai2<horaf1+1){
		alert("horas introducidas incorrectas"+"<br>"+"la hora reentrada deve ser mayor que la hora final de inicio");
		horasc=0;
		desglose="<img src=calendario.png width=\"25\"+ height=\"25\">";
	}

	else if (check_turno_partido.checked && horai2-horaf1>3){
		alert("horas introducidas incorrectas"+"<br>"+"el partido deve ser de 3 horas o menos");
		horasc=0;
		desglose="<img src=calendario.png width=\"25\"+ height=\"25\">";
	}

	else {
		alert("horas trabajadas: "+horast+"\n"+desglose+"\n"+"\n"+"--> VOY A COBRAR :  "+horasc+ "Euros");	
	}

// mostrar variables en tabla

	for(i=0;i<7;i++) {
		if (buscadia.value==i){
		celda5=f5.getElementsByTagName("td")[i];
			if (horast>0){
			celda5.innerHTML=horast;
			}
		}
		if (buscadia.value==i){
		celda6=f6.getElementsByTagName("td")[i];
			if (noche>=0){
			celda6.innerHTML=noche;
			}
		}
		if (buscadia.value==i){
		celda7=f7.getElementsByTagName("td")[i];
			celda7.innerHTML=desglose;
		}
		if (buscadia.value==i){
			celdaunidades=filaunidades.getElementsByTagName("td")[i];
				if (unidades>=0){
				celdaunidades.innerHTML=unidades;
				}
			}
	}

	for(i=0;i<7;i++) {
		if (buscadia.value==i){
			//alert(i);
			celda1=f1.getElementsByTagName("td")[i];

			if (mini1==0){
			celda1.innerHTML=selecthorai1 + ":0" + mini1;
			}
			else {
			celda1.innerHTML=selecthorai1 + ":" + mini1;
			}
			celda2=f2.getElementsByTagName("td")[i];
			if (mint1==0){
			celda2.innerHTML=selecthoraf1 + ":0" + mint1;
			}
			else {
			celda2.innerHTML=selecthoraf1 + ":" + mint1;
			}
			celda3=f3.getElementsByTagName("td")[i];
			if (mini2==0){
			celda3.innerHTML=selecthorai2 + ":0" + mini2;
			//celda3.innerHTML=null;
			}
			else {
			celda3.innerHTML=selecthorai2 + ":" + mini2;
			}
			celda4=f4.getElementsByTagName("td")[i];
			if (mint2==0){
			celda4.innerHTML=selecthoraf2 + ":0" + mint2;
			}
			else {
			celda4.innerHTML=selecthoraf2 + ":" + mint2;
			}	
		}
	}
}

function horascsemana () {
	let showeurosemana=horasc;	
	for(i=0;i<7;i++) {
		if (buscadia.value==i){
			Horascsemanales[i]=horasc.toFixed(2)+"€";
			celda0=f8.getElementsByTagName("td")[i];
			celda0.innerHTML=Horascsemanales[i];
		}
	}
}

function eurosemana () {

	let contnull=0;
	//comprobar que todas las casillas de "total horas" tienen un valor
	for(i=0;i<7;i++) {
		
		celda1=f5.getElementsByTagName("td")[i];
		
		if (celda1.innerHTML>=0){
			contnull=contnull+1;
		}
	}

	if (contnull==7) {
		let contdl=0;
		// revisar cuantos dias libres tienes
		for(i=0;i<7;i++) {
			
			celda2=f1.getElementsByTagName("td")[i];
				
			if (celda2.innerHTML=="DL"){
					contdl=contdl+1;
			}
		}
		if (contdl>0){
		
			const tds=fila8.querySelectorAll("td");
			let totaleuros=0;
				
			for(let i=0; i<7; i++) {
			
				totaleuros+=parseFloat(tds[i].innerHTML);
		
				for (j=0;j<6;j++){

					if (selectsemana.value==j){					
						// pintar horas de inicio y final
						fila=document.getElementById("fila"+[(j*2)+11]);
						celda=fila.getElementsByTagName("td")[i];
						celda.innerHTML=f1.getElementsByTagName("td")[i].innerHTML;
					
						if (f1.getElementsByTagName("td")[i].innerHTML!=="DL" ) {
							celda.innerHTML+="<br>";
							celda.innerHTML+=f2.getElementsByTagName("td")[i].innerHTML;
							
						
							if (f3.getElementsByTagName("td")[i].innerHTML!=="0:00" ) {
								celda.innerHTML+="<br>-<br>";
								celda.innerHTML+=f3.getElementsByTagName("td")[i].innerHTML;
								celda.innerHTML+="<br>";
								celda.innerHTML+=f4.getElementsByTagName("td")[i].innerHTML;
							}
						}
				
						if (i==6) { 
							celda.style.color="#f11445";
						}
						//pintar iconos
						fila2=document.getElementById("fila"+[(j)+30]);
						celda2=fila2.getElementsByTagName("td")[i];
						celda2.innerHTML=f7.getElementsByTagName("td")[i].innerHTML;
					}
				}
			}
	
			const tdh=fila5.querySelectorAll("td");
			let totalhoras=0;

			for(let i=0; i<7; i++) {
						totalhoras+=parseFloat(tdh[i].innerHTML);
			}

			if (totalhoras<=36){
				alert ("esta semana cobraras:"+totaleuros+" €"+"\n"+"y trabajas"+totalhoras+"horas.");
				totalhorasemana [selectsemana.value]=totalhoras;
				totaleurosemana [selectsemana.value]=totaleuros;
				var celdahoras=0;
				var celdaeuros=0;
				for(i=0;i<7;i++) {
					if (selectsemana.value==i){
						
						celdahoras=filahoras.getElementsByTagName("th")[i];
						celdaeuros=filaeuros.getElementsByTagName("th")[i];		
						celdahoras.innerHTML=totalhoras;
						celdaeuros.innerHTML=totaleuros.toFixed(2);
						
					}
				}
			}

			else {
				alert ("tienes"+totalhoras+" horas"+"\n"+"el maximo son 36 horas.");
			}

			console.log ("totalhorassemana",totalhorasemana);
			console.log ("totaleurossemana",totaleurosemana);


			alert (selectsemana.value);
			// primera semana de nomina desde dia 1
			let primerasemana=0;
			let primerasemanah=0;
			if (selectsemana.value==0) {
				celda10=0;

				for (j=0; j<7;j++){
					celda10=f10.getElementsByTagName("td")[j];
					//alert (celda10.innerHTML);
					if (celda10.innerHTML==1){
						
						for (h=j;h<7;h++) {
							celda8=f8.getElementsByTagName("td")[h];
							celda5=f5.getElementsByTagName("td")[h];
							celda6=f6.getElementsByTagName("td")[h];
							celdaunidades=filaunidades.getElementsByTagName("td")[h];
							
							primerasemana+=parseFloat(celda8.innerHTML);
							primerasemanah+=parseFloat(celda5.innerHTML);
							//alert("justo ahora");
						
							horasnochemes[h-j]=celda6.innerHTML;
							horasdiarias[h-j]=celda5.innerHTML;

							eurosdiarios[h-j]=celda8.innerHTML;
							unidadesdiarias[h-j]=celdaunidades.innerHTML;

							// cuento horas festivas
							if (h==6){

								festivasmes[6]=celda5.innerHTML;
							}
							
							if (celda5.innerHTML>0){

								transportemes[h-j]=1;

							}

							if (celda5.innerHTML==0){

								transportemes[h-j]=0;

							}

							madruguemes[h-j]=madruguesemana[j];
							supermadruguemes[h-j]=supermadruguesemana[j];
							dietames[h-j]=dietasemana[j];
							turnopartidomes[h-j]=turnopartidosemana[j];

							totaleuros1semana=primerasemana;
							totalhoras1semana=primerasemanah;
						}
						
						alert (totaleuros1semana+" y "+totalhoras1semana);
					}						
				}
			}
			//ultima semana nomina
			let ultimasemana=0;
			let ultimasemanah=0;
			if (selectsemana.value==4) {
				celda18=0;

				for (j=0; j<7;j++){
					celda18=f18.getElementsByTagName("td")[j];

					if (celda18.innerHTML==1){
						
						for (h=0;h<j;h++) {
							celda8=f8.getElementsByTagName("td")[h];
							celda5=f5.getElementsByTagName("td")[h];
							celda6=f6.getElementsByTagName("td")[h];
							celdaunidades=filaunidades.getElementsByTagName("td")[h];
							ultimasemana+=parseFloat(celda8.innerHTML);
							ultimasemanah+=parseFloat(celda5.innerHTML);
							horasnochemes[28+h]=celda6.innerHTML;
							horasdiarias[28+h]=celda5.innerHTML;

							eurosdiarios[28+h]=celda8.innerHTML;
							unidadesdiarias[28+h]=celdaunidades.innerHTML;

							if (celda5.innerHTML>0){

								transportemes[28+h]=1;

							}

							if (celda5.innerHTML==0){

								transportemes[28+h]=0;

							}

							madruguemes[28+h]=madruguesemana[h];
							supermadruguemes[28+h]=supermadruguesemana[h];
							dietames[28+h]=dietasemana[h];
							turnopartidomes[28+h]=turnopartidosemana[h];


							totaleurosusemana=ultimasemana;
							totalhorasusemana=ultimasemanah;
						}
					alert ("5º semana"+totaleurosusemana.toFixed(2)+" y "+totalhorasusemana);
					}
					
				}
			}

			if (selectsemana.value==5) {
				celda20=0;

				for (j=0; j<7;j++){
					celda20=f20.getElementsByTagName("td")[j];
					
					if (celda20.innerHTML==1){
						
						for (h=0;h<j;h++) {
							celda8=f8.getElementsByTagName("td")[h];
							celda5=f5.getElementsByTagName("td")[h];
							celda6=f6.getElementsByTagName("td")[h];
							celdaunidades=filaunidades.getElementsByTagName("td")[h];
							ultimasemana+=parseFloat(celda8.innerHTML);
							ultimasemanah+=parseFloat(celda5.innerHTML);
							horasnochemes[35+h]=celda6.innerHTML;
							horasdiarias[35+h]=celda5.innerHTML;

							eurosdiarios[35+h]=celda8.innerHTML;
							unidadesdiarias[35+h]=celdaunidades.innerHTML;

							if (celda5.innerHTML>0){

								transportemes[35+h]=1;

							}

							if (celda5.innerHTML==0){

								transportemes[35+h]=0;

							}

							madruguemes[35+h]=madruguesemana[h];
							supermadruguemes[35+h]=supermadruguesemana[h];
							dietames[35+h]=dietasemana[h];
							turnopartidomes[35+h]=turnopartidosemana[h];

							totaleurosusemana=ultimasemana;
							totalhorasusemana=ultimasemanah;
						}
					alert ("6º semana"+totaleurosusemana.toFixed(2)+" y "+totalhorasusemana);
					}
				}
			}
		}
	
		else {
			alert ("Debes tener un dia con DL");
		}
			
	}

	else {
		alert ("deves introducir todos los dias correctamente");			
	}
}

function ponerdl () {
		
	for(i=0;i<7;i++) {

		if (buscadia.value==i){
			celda1=f1.getElementsByTagName("td")[i];
			celda1.innerHTML="DL";	
		}
		if (buscadia.value==i){
			celda2=f2.getElementsByTagName("td")[i];	
			celda2.innerHTML=null;	
		}
		if (buscadia.value==i){
			celda3=f3.getElementsByTagName("td")[i];
			celda3.innerHTML=null;	
		}

		if (buscadia.value==i){
			celda4=f4.getElementsByTagName("td")[i];
			celda4.innerHTML=null;
		}
		if (buscadia.value==i){
			celda5=f5.getElementsByTagName("td")[i];	
			celda5.innerHTML="0";	
		}
		if (buscadia.value==i){
			celda6=f6.getElementsByTagName("td")[i];
			celda6.innerHTML="0";	
		}
		if (buscadia.value==i){
			celda7=f7.getElementsByTagName("td")[i];
			celda7.innerHTML=null;
		}
		if (buscadia.value==i){
			celda8=f8.getElementsByTagName("td")[i];
			celda8.innerHTML="0";
		}
		if (buscadia.value==i){
			celdaunidades=filaunidades.getElementsByTagName("td")[i];
			celdaunidades.innerHTML="0";
		}
	}
}
