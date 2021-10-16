var number = document.querySelector(".numberInput1");
var size = document.querySelector(".numberInput2");
var result = document.querySelector(".resultado");
var resultados= [];
var tabuada;

function adicao(){

	if (number.value == "") {
		result.innerHTML = "Valores não informados!!!"
	}
	else{
		resultados.splice(0, resultados.length);

		for(var i = 0; i<=parseInt(size.value); i++){

			tabuada = parseInt(number.value)+i;
			resultados.push(number.value + " + " + i + " = " + tabuada + " </br>")
			
		}

		result.innerHTML = resultados.join(' ');
	}
	


}

function subtracao(){
	if (number.value == ""){
		result.innerHTML = "Valores não informados!!!"
	}
	else{
		resultados.splice(0, resultados.length);

		for(var i = 0; i<=parseInt(size.value); i++){

			tabuada = parseInt(number.value)-i;
			resultados.push(number.value + " - " + i + " = " + tabuada + " </br>")
			
		}

		result.innerHTML = resultados.join(' ');	
	}
	
}

function multiplicacao(){
	if (number.value == ""){
		result.innerHTML = "Valores não informados!!!"
	}
	else{
		resultados.splice(0, resultados.length);

		for(var i = 0; i<=parseInt(size.value); i++){

			tabuada = parseInt(number.value)*i;
			resultados.push(number.value + " x " + i + " = " + tabuada + " </br>")
			
		}

		result.innerHTML = resultados.join(' ');
	}
		
}

function divisao(){

	if (number.value == ""){
		result.innerHTML = "Valores não informados!!!"
	}
	else{
		resultados.splice(0, resultados.length);

		for(var i = 1; i<=parseFloat(size.value); i++){

			tabuada = parseFloat(number.value)/i;
			resultados.push(number.value + " / " + i + " = " + tabuada.toFixed(2) + " </br>")
			
		}

		result.innerHTML = resultados.join(' ');
	}
		
}
