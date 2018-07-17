var btn = document.getElementById("btn");
var txt = document.getElementById("txtFinal");

btn.addEventListener("click", rifate);

function rifate()
{
	var a = parseInt(document.getElementById("dividendo").value);
	var b = parseInt(document.getElementById("divisor").value);
	mcd(a, b);
}

function mcd(divisor, dividendo)
{
	var r, aux, a=divisor, b=dividendo;
	if (a < b)
	{
		aux = a;
		a = b;
		b = aux;
	}
	while(b !== 0)
	{
		r = a % b;
		a = b;
		b = r;
	}

 	txt.textContent = a + " = mcd(" + divisor + ", " + dividendo + ")";
}