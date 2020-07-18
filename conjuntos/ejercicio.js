var comenzar = document.getElementById("comenzar");
var instrucciones = document.getElementById("instrucciones");
var datos = document.getElementById("datosconjuntos");
var inserta = document.getElementById("inserta");
var botones = document.getElementById("botones");
var final = document.getElementById("txtFinal");

var ca = document.getElementById("btnA");
var cb = document.getElementById("btnB");
var union = document.getElementById("union");
var inter = document.getElementById("inter");
var at = document.getElementById("at");
var bt = document.getElementById("bt");

ca.addEventListener("click", fca);
cb.addEventListener("click", fcb);
union.addEventListener("click", unir);
inter.addEventListener("click", interseccion);
at.addEventListener("click", compA);
bt.addEventListener("click", compB);

var a, b; //numero de elementos para los conjuntos
var conjA = [], conjB = [];

comenzar.addEventListener("click", muestra);
inserta.addEventListener("click", rellena);

function muestra()
{
	instrucciones.style.display = "none";
	datos.style.display = "block";
}

function rellena()
{
	var dato;
	conjA = [], conjB = [];
	a = document.getElementById("A").value;
	b = document.getElementById("B").value;
	if(a.length)
	{
		a = parseInt(a);
		b = parseInt(b);

		for(var i=0;i<a;i++)
		{
			dato = prompt((i+1)+"/"+a+". Para A");
			conjA.push(dato);
		}

		for(var i=0;i<b;i++)
		{
			dato = prompt((i+1)+"/"+b+". Para B");
			conjB.push(dato);
		}
		botones.style.display = "block";
	}
	else
		alert("Rellena los campos");
}

function fca() { resulta(conjA); }
function fcb() { resulta(conjB); }
function unir() {
	var r = new Set(conjA.concat(conjB));
	resulta(Array.from(r));
}
function interseccion() {
	var r = [];
	for(var j of conjA)
		for(var i of conjB)
			if(i === j)
				r.push(i);
	resulta(r);
}
function compA()
{
	// B-A
	var r = [], b ;
	for(var j of conjB)
	{
		b = 0;
		for(var i of conjA)
		{
			if(i === j)
				b = 1;
		}

		if(!b)
			r.push(j);
	}
	resulta(r);
}
function compB()
{
	// A-B
	var r = [], b ;
	for(var j of conjA)
	{
		b = 0;
		for(var i of conjB)
		{
			if(i === j)
				b = 1;
		}

		if(!b)
			r.push(j);
	}
	resulta(r);
}

function resulta(array)
{
	final.innerHTML = "{ " + array.toString() + " }";
}