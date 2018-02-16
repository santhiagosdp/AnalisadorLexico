 /*  
COMPILADORES 2018/1
Sistemas de Informação
CEULP ULBRA
*/

//analisando
var keyword = {
	1:"and",
	1:"del", 
1:"from",
1:"not",
1:"while", 
1:"as",
1:"elif", 
1:"global", 
1:"or",
1:"with", 
1:"assert", 
1:"else",
1:"if",
1:"object", 
2:"+",
2:"-", 
2:"*",
2:"**",
2:"/",
2:"//",
2:"%",
2:"<<",
2:">>",
2:"&",
2:"|",
2:"^",
3:"["
3:"]"
3:"{"
3:"}"
3:"@"
3:"," 
}


function verif() 
{
	codigo = document.getElementById('codigo').value;
	numElem = 0;
	relatorio="";
	numElemStr="";
	
	for(var i=0; i < codigo.length; i++)
		relatorio += codigo[i];
		
	
	
	/* for frase in arquivo: 
    strNumLinha = str(numLinha)
    data += analise.verificaFrase(frase,numLinha)
    numLinha+=1
	
    print(data)	*/
	
	/* if (document.getElementById('result2').innerHTML == document.getElementById('result').innerHTML) */
	if (numElem!=0)
	{
		document.getElementById('result').innerHTML = relatorio;
	}
	else
	{
		document.getElementById('result').innerHTML=relatorio;
	}
} 
