// let btn= document.getElementById("submit")
let meterToFeet=document.getElementById("meterToFeet");
let feetToMeter=document.getElementById("feetToMeter");
let literToGallon=document.getElementById("literToGallon");
let gallonToliter=document.getElementById("gallonToliter");
let kilosToPounds=document.getElementById("kilosToPounds");
let poundtOKilos=document.getElementById("poundtOKilos");
function btnclick()
{
	let input=document.getElementById("input").value;
	console.log(input);
	let meter=input*3.28084;
	let foot=input/3.28084;
	let liter=input/3.78541;
	let gallon=input*3.78541;
	let kilo=input*2.20462;
	let pound=input/2.20462;
	meterToFeet.textContent=input+" meters: "+meter.toFixed(3)+" feet ";
	feetToMeter.textContent=input+" | feet: "+foot.toFixed(3)+" meters ";
	literToGallon.textContent=input+" | liters: "+liter.toFixed(3)+" gallons ";
	gallonToliter.textContent=input+" | gallons: "+gallon.toFixed(3)+" liters ";
	kilosToPounds.textContent=input+" | kilos: "+kilo.toFixed(3)+" pounds ";
	poundtOKilos.textContent=input+" | pounds: "+pound.toFixed(3)+" kilos ";

}