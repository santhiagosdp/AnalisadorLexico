 /*  
COMPILADORES 2018/1
Sistemas de Informação
CEULP ULBRA
*/

//analisando


function verif() 
{	var keyReservada = ["and","del","from","not","while","as","elif","global","or","with","assert","else","if","object","pass","yield","break","except",
"import","print","class","exec","in","len","range","raise","continue","finally","is","list","return","def","for","lambda","try","self","split"];
	var keyIdentificador = ["+","-","*","**","/","//","%","<<",">>","&","|","^","~","<",">","<=",">=","==","!=","<>"];
	var keyDelimitador = ["(",")","[","]","{","}","@",",",":",".","`","=",";","+=","-=","*=","/=","//=","%=","&=","|=","^=",">>=","<<=","**=","'","'"];
	
	codigo = document.getElementById('codigo').value;
	numElem = 0;
	relatorio="";
	numElemStr="";
	keys = codigo.split(' ');
	
	for(var i=0; i < keys.length; i++)
			for (var j=0; j < keyReservada.length; j++)
				
				if(keys[i] == keyReservada[j]){
					relatorio += keys[i] + ' - palavra reservada \n\n\n';
				}
				else if (keys[i] == keyIdentificador[j]){
					relatorio += keys[i] + ' - Identifiacor\n';
				}
				else if (keys[i] == keyDelimitador[j]){
					relatorio += keys[i] + ' - Delimitador\n\n';
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
