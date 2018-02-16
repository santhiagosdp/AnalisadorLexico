 /*  
COMPILADORES 2018/1
Sistemas de Informação
CEULP ULBRA
*/

//analisando


function verif() 
{	var keyReservada = ["and","del"];	
	
	codigo = document.getElementById('codigo').value;
	numElem = 0;
	relatorio="";
	numElemStr="";
	keys = codigo.split(' ');
	
	for(var i=0; i < keys.length; i++)
			for (var j=0; j < keyReservada.length; j++)
				if(keys[i]==keyReservada[j]){
						relatorio +="- palavra reservada';
				}
		
	
	if (2==2)
	{
		document.getElementById('result').innerHTML = relatorio;
	}
	else
	{
		document.getElementById('result').innerHTML=relatorio;
	}
} 
