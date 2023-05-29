var obj = [];
var objs = [];

function calcular(){

	//var trace = [];

	var brutos = document.getElementById("dados").value;
	//for (var i=0;i < 10;i++){
		
		linhas = brutos.split(';');
		qtdLinhas = linhas.length - 1;
		colunas = linhas[0].split(',');
		qtdColunas = colunas.length;

		//console.log(qtdLinhas);
		console.log(qtdColunas);
		
		soma = 0;
		media = 0;
		var medicoes = [];
		
		for (var i=0; i < qtdLinhas; i++){

			for (var j=1; j < qtdColunas; j++){
			
				colunas = linhas[i].split(',');

				medicoes.push(colunas[j]);

				soma += parseFloat(colunas[j]);
				

			}

			console.log(medicoes);

			obj = {
			  x: medicoes,
			  type: "histogram",
			  opacity: 0.6,
			  marker: {color: "green" }
			};
			
			objs.push(obj);
			console.log(objs);
			
			media = Math.round(soma / (qtdColunas - 1), 2);
			

			document.getElementById("resultados").append("Media = " + media);
			document.getElementById("resultados").append("\n");

			soma = 0;
			media = 0;
			medicoes = [];
		}

		var inicializador = {
		    x: medicoes,
		    type: 'histogram',
		    opacity: 0.5,
		    marker: {color:'white'}
		  };
		var data = [inicializador, objs[0], objs[1]];
		//var layout = {barmode: "overlay"};
		Plotly.newPlot('myDiv', data);
		//Plotly.newPlot('myDiv', obj);

}