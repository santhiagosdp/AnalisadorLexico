<!--
//COMPILADORES 2018/1
//Sistemas de Informação
//CEULP ULBRA
-->

//analisando

function verif()
{ // Alfabeto Python
	var keyReservada = ["and", "del","from","not","while","as","elif","global","or","with","assert","else","if","object","pass","yield","break","except",
	"import","print","class","exec","in","len","range","raise","continue","finally","is","list","return","def","for","lambda","try","self","split"];
	var keyIdentificador = ["+","var", "i","-","*","**","/","//","%","<<",">>","&","|","^","~","<",">","<=",">=","==","!=","<>"];
	var keyDelimitador = ["(",")","[","]","{","}","@",",",":",".","`","=",";","+=","-=","*=","/=","//=","%=","&=","|=","^=",">>=","<<=","**=","'","'"];

	codigo = document.getElementById('codigo').value;
	numElem = 0;
	relatorio="<table class='table table-bordered'><tr><th>Token</th><th>Identificação</th></tr>";
	numElemStr="";
	keys = codigo.split(' ');

	for(var i=0; i < keys.length; i++){
		var entrou = false;
		for (var r=0; r < keyReservada.length; r++){
			if(keys[i] == keyReservada[r] && entrou == false){
				relatorio += "<tr><td>"+keys[i]+"</td><td>Palavra reservada"+"</td></tr> "
				//relatorio += keys[i] + ' ==>  palavra reservada <br></br> ';
				entrou = true;
				break;
			}
		}
		for (var j=0; j < keyIdentificador.length; j++){
			if (keys[i] == keyIdentificador[j] && entrou == false){
				relatorio += "<tr><td>"+keys[i]+"</td><td>Identificador"+"</td></tr> "
				//relatorio += keys[i] + ' ==>  Identificador<br></br>';
				entrou = true;
				break;
			}
		}
		for (var d=0; d < keyDelimitador.length; d++){
			if (keys[i] == keyDelimitador[d] && entrou == false){
				relatorio += "<tr><td>"+keys[i]+"</td><td>Delimitador"+"</td></tr> "
				//relatorio += keys[i] + ' ==> Delimitador<br></br>';
				entrou = true;
				break;
			}
		}
		if (entrou ==false){
			relatorio += "<tr><td>"+keys[i]+"</td><td>Sem êxito na analise"+"</td></tr> "
			//relatorio += keys[i] + ' ==> Sem êxito na analise<br></br>';
			entrou = true;
		}
	}
	if (2==2)
	{
		/* relatorio = keys[0] + "<br></br>"+ relatorio; */
		document.getElementById('result').innerHTML = relatorio;
	}
	else
	{
		document.getElementById('result').innerHTML=relatorio;
	}
}
