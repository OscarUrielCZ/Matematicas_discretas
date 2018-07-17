var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", proceder);

var seccion1 = document.getElementById("seccion1");
var seccion2 = document.getElementById("seccion2");
var seccion3 = document.getElementById("seccion3");
var txtFinal = document.getElementById("txtFinal");

var elementos = [];
elementos.push(seccion1);
elementos.push(seccion2);
elementos.push(seccion3);

function mostrar(excepcion) {
	for(var i of elementos) 
	{
		if(i === excepcion)
			i.style.display = "block";
		else
			i.style.display = "none";
	}
}

function proceder() 
{
	var n = parseInt(document.getElementById("n").value);
	switch(n) 
	{

		case 1: haceruno(); break;
		case 2: hacerdos(); break;
		case 3: hacertres(); break;
		default: 
			mostrar(null); 
			txtFinal.textContent = "";
			alert("Por favor ingresa un numero entre 1 y 3");
			break;
	}
}

function haceruno() 
{
	mostrar(seccion1);
	txtFinal.textContent = "";

	var not = document.getElementById("not");
	not.addEventListener("click", hacernot);

	function hacernot() 
	{
		var txt1 = document.getElementById("txt1").value;
		if(txt1 !== "") 
		{
			if(txt1.search("no") != -1)
				txtFinal.textContent = txt1.replace("no","si");
			else if(txt1.search("si") != -1)
				txtFinal.textContent = txt1.replace("si","no");
			else
				alert("Escribe 'si' o 'no' en tu proposición");
		}
		else
			alert("Llena el espacio");
	}
}			
function hacerdos()
{
	mostrar(seccion2);
	
	txtFinal.textContent = "";

	var and = document.getElementById("and");
	var or = document.getElementById("or");
	var implicacion = document.getElementById("implicacion");
	var bicondicional = document.getElementById("bicondicional");

	and.addEventListener("click", hacerand);
	or.addEventListener("click", haceror);
	implicacion.addEventListener("click", hacerimplicacion);
	bicondicional.addEventListener("click", hacerbicondicional);

	function hacerand() 
	{
		var txt2 = document.getElementById("txt2").value;
		var txt3 = document.getElementById("txt3").value;
		if(txt2 != "" && txt3 != "")
			txtFinal.textContent = txt2 + " y " + txt3;
		else
			alert("Rellena los dos espacios");
	}

	function haceror() 
	{
		var txt2 = document.getElementById("txt2").value;
		var txt3 = document.getElementById("txt3").value;
		if(txt2 != "" && txt3 != "")
			txtFinal.textContent = txt2 + " o " + txt3;
		else
			alert("Rellena los dos espacios");
	}

	function hacerimplicacion() 
	{
		var txt2 = document.getElementById("txt2").value;
		var txt3 = document.getElementById("txt3").value;
		if(txt2 != "" && txt3 != "")
			txtFinal.textContent = "Si " + txt2 + " entonces " + txt3;
		else
			alert("Rellena los dos espacios");
	}

	function hacerbicondicional() 
	{
		var txt2 = document.getElementById("txt2").value;
		var txt3 = document.getElementById("txt3").value;
		if(txt2 != "" && txt3 != "")
			txtFinal.textContent = "Si " + txt2 + " si solo si " + txt3;
		else
			alert("Rellena los dos espacios");
	}
}

function hacertres()
{
	mostrar(seccion3);
	txtFinal.textContent = "";

	var and2 = document.getElementById("and2");
	var or2 = document.getElementById("or2");

	and2.addEventListener("click", hacerand);
	or2.addEventListener("click", haceror);

	function hacerand() 
	{
		var txt2 = document.getElementById("txt4").value;
		var txt3 = document.getElementById("txt5").value;
		var txt4 = document.getElementById("txt6").value;
		if(txt2 != "" && txt3 != "" && txt4 != "")
			txtFinal.textContent = txt2 + " y " + txt3 + " y " + txt4;
		else
			alert("Rellena los tres espacios");
	}

	function haceror() 
	{
		var txt2 = document.getElementById("txt4").value;
		var txt3 = document.getElementById("txt5").value;
		var txt4 = document.getElementById("txt6").value;
		if(txt2 != "" && txt3 != "" && txt4 != "")
			txtFinal.textContent = txt2 + " o " + txt3 + " o " + txt4;
		else
			alert("Rellena los tres espacios");
	}
}