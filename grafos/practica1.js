//divs
var dgrafos = document.getElementById("dgrafo");
var dVE = document.getElementById("dVE");
var dgrsimple = document.getElementById("dgrsimple");
var dgrcomp = document.getElementById("dgrcomp");
var dgrcycle = document.getElementById("dgrcycle");
var dgrbipartito = document.getElementById("dgrbipartito");
var dgrpon = document.getElementById("dgrpon");
var dgriso = document.getElementById("dgriso");
var dcamino = document.getElementById("dcamino");
var dcircuito = document.getElementById("dcircuito");
var dgrconexo = document.getElementById("dgrconexo");
var dgreuler = document.getElementById("dgreuler");
var dgrhamilton = document.getElementById("dgrhamilton");

//botones
var btngrafo = document.getElementById("btngrafo");
var btnVE = document.getElementById("btnVE");
var btngrsimple = document.getElementById("btngrsimple");
var btngrcomp = document.getElementById("btngrcomp");
var btngrcycle = document.getElementById("btngrcycle");
var btngrbipartito = document.getElementById("btngrbipartito");
var btngrpon = document.getElementById("btngrpon");
var btngriso = document.getElementById("btngriso");
var btncamino = document.getElementById("btncamino");
var btncircuito = document.getElementById("btncircuito");
var btngrconexo = document.getElementById("btngrconexo");
var btngreuler = document.getElementById("btngreuler");
var btngrhamilton = document.getElementById("btngrhamilton");

//eventos del boton
btngrafo.addEventListener("click", function(){ mostrar(dgrafos); });
btnVE.addEventListener("click", function(){ mostrar(dVE); });
btngrsimple.addEventListener("click", function(){ mostrar(dgrsimple); });
btngrcomp.addEventListener("click", function(){ mostrar(dgrcomp); });
btngrcycle.addEventListener("click", function(){ mostrar(dgrcycle); });
btngrcycle.addEventListener("click", function(){ mostrar(dgrcycle); });
btngrbipartito.addEventListener("click", function(){ mostrar(dgrbipartito); });
btngrpon.addEventListener("click", function(){ mostrar(dgrpon); });
btngriso.addEventListener("click", function(){ mostrar(dgriso); });
btncamino.addEventListener("click", function(){ mostrar(dcamino); });
btncircuito.addEventListener("click", function(){ mostrar(dcircuito); });
btngrconexo.addEventListener("click", function(){ mostrar(dgrconexo); });
btngreuler.addEventListener("click", function(){ mostrar(dgreuler); });
btngrhamilton.addEventListener("click", function(){ mostrar(dgrhamilton); });

var divisiones = [dgrafos, dVE, dgrsimple, dgrcomp, dgrcycle, dgrbipartito, dgrpon, dgriso, dcamino, dcircuito, dgrconexo, dgreuler, dgrhamilton];

function mostrar(division)
{
	for(var i of divisiones)
	{
		if(i === division)
			i.style.display = "block";
		else
			i.style.display = "none";
	}
}