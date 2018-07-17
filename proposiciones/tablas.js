var not = document.getElementById("not");
var and = document.getElementById("and");
var or = document.getElementById("or");
var implicacion = document.getElementById("implicacion");
var bicondicional = document.getElementById("bicondicional");
var tabla1 = document.getElementById("tabla1");
var tabla2 = document.getElementById("tabla2");

not.addEventListener("click", hacernot);
and.addEventListener("click", hacerand);
or.addEventListener("click", haceror);
implicacion.addEventListener("click", hacerimplicacion);
bicondicional.addEventListener("click", hacerbicondicional);


function hacernot()
{
	tabla2.style.display = "none";
	tabla1.style.display = "block";
}

function hacerand()
{
	tabla1.style.display = "none";
	tabla2.style.display = "block";
	op2.innerHTML = " &#94; ";
	p21.innerHTML = "V";
	p22.innerHTML = "F";
	p23.innerHTML = "F";
	p24.innerHTML = "F";
}

function haceror()
{
	tabla1.style.display = "none";
	tabla2.style.display = "block";
	op2.innerHTML = " v ";
	p21.innerHTML = "V";
	p22.innerHTML = "V";
	p23.innerHTML = "V";
	p24.innerHTML = "F";	
}

function hacerimplicacion()
{
	tabla1.style.display = "none";
	tabla2.style.display = "block";
	op2.innerHTML = " &rarr; ";
	p21.innerHTML = "V";
	p22.innerHTML = "F";
	p23.innerHTML = "V";
	p24.innerHTML = "V";	
}

function hacerbicondicional()
{
	tabla1.style.display = "none";
	tabla2.style.display = "block";
	op2.innerHTML = " &harr; ";
	p21.innerHTML = "V";
	p22.innerHTML = "F";
	p23.innerHTML = "F";
	p24.innerHTML = "V";	
}