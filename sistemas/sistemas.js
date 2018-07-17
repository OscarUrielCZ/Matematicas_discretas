var fin1 = document.getElementById("fin1");
var fin2 = document.getElementById("fin2");
var fin3 = document.getElementById("fin3");
var fin4 = document.getElementById("fin4");
var btn = document.getElementById("btn");
var op = document.getElementById("opcional");

btn.addEventListener("click", rifate);

function rifate()
{
	limpiar();
	var n = document.getElementById("n").value;
	var op = document.getElementById("opcional").value;
	if(n.length === 0)
		alert("Llena el valor");
	else
	{
		switch(op)
		{
			case '10': hacerdecimal(n); break;
			case '2': hacerbinario(n); break;
			case '8': haceroctal(n); break;
			case '16': hacerhexadecimal(n); break;
		}
	}
}

function hacerdecimal(n)
{
	resultar(parseInt(n));
}

function hacerbinario(n)
{
	var i, j = 0, d, s = 0, f = 1;
	for(i = n.length-1; i >= 0; i--)
	{
		if(n[i] != '0' && n[i] != '1')
		{
			f = 0;
			break;
		}

		d = parseInt(n[i]) * Math.pow(2, j);
		s += d;
		j++;
	}
	if(f)
		resultar(s);
	else
		alert("Coloca valores binarios");
}

function haceroctal(n)
{
	var i, j = 0, d, s = 0, f = 1;
	for(i = n.length-1; i >= 0; i--)
	{
		if(!(n[i] >= '0' && n[i] <= '7'))
		{
			f = 0;
			break;
		}

		d = parseInt(n[i]) * Math.pow(8, j);
		s += d;
		j++;
	}
	if(f)
		resultar(s);
	else
		alert("Coloca valores octales");
}

function hacerhexadecimal(n)
{
	var i, j = 0, d, s = 0, f = 1, aux;
	for(i = n.length-1; i >= 0; i--)
	{
		if(!((n[i] >= '0' && n[i] <= '9') || (n[i] >= 'a' && n[i] <= 'f')))
		{
			f = 0;
			break;
		}

		switch(n[i])
		{
			case 'a': aux = 10; break;
			case 'b': aux = 11; break;
			case 'c': aux = 12; break;
			case 'd': aux = 13; break;
			case 'e': aux = 14; break;
			case 'f': aux = 15; break;
			default: aux = parseInt(n[i]); break;
		}
		
		d = aux * Math.pow(16, j);
		s += d;
		j++;
	}

	if(f)
		resultar(s);
	else
		alert("Coloca valores hexadecimales");
}

function resultar(n)
{
	fin1.textContent = "Decimal: " + n.toString(10);
	fin2.textContent = "Binario: " + n.toString(2);
	fin3.textContent = "Octal: " + n.toString(8);
	fin4.textContent = "Hexadecimal: " + n.toString(16);
}

function limpiar()
{
	fin1.textContent = "";
	fin2.textContent = "";
	fin3.textContent = "";
	fin4.textContent = "";
}