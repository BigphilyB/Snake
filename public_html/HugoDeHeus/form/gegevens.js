var aanhef = localStorage.getItem("Aanhef");
var voornaam = localStorage.getItem("Voornaam");
var achternaam = localStorage.getItem("Achternaam");
var straat = localStorage.getItem("Straatnaam");
var nummer = localStorage.getItem("Huisnummer");
var bedrijf = localStorage.getItem("Bedrijf");
var post = localStorage.getItem("Postcode");
var plaats = localStorage.getItem("Plaatsnaam");
var land = localStorage.getItem("Land");
var email = localStorage.getItem("Email");
var telenum = localStorage.getItem("Telefoonnummer");
var aanhef2 = localStorage.getItem("Ander factuur aanhef");
var voornaam2 = localStorage.getItem("Ander factuur voornaam");
var achternaam2 = localStorage.getItem("Ander factuur achternaam");
var straat2 = localStorage.getItem("Ander factuur straatnaam");
var nummer2 = localStorage.getItem("Ander factuur huisnummer");
var bedrijf2 = localStorage.getItem("Ander factuur bedrijf");
var post2 = localStorage.getItem("Ander factuur postcode");
var plaats2 = localStorage.getItem("Ander factuur plaatsnaam");
var land2 = localStorage.getItem("Ander factuur land");

document.getElementById("aanhef").innerHTML = aanhef;
document.getElementById("voornaam").innerHTML = voornaam;
document.getElementById("achternaam").innerHTML = achternaam;
document.getElementById("straat").innerHTML = straat;
document.getElementById("nummer").innerHTML = nummer;
document.getElementById("bedrijf").innerHTML = bedrijf;
document.getElementById("post").innerHTML = post;
document.getElementById("plaats").innerHTML = plaats;
document.getElementById("land").innerHTML = land;
document.getElementById("email").innerHTML = email;
document.getElementById("telenum").innerHTML = telenum;
document.getElementById("aanhef2").innerHTML = aanhef2;
document.getElementById("voornaam2").innerHTML = voornaam2;
document.getElementById("achternaam2").innerHTML = achternaam2;
document.getElementById("straat2").innerHTML = straat2;
document.getElementById("nummer2").innerHTML = nummer2;
document.getElementById("bedrijf2").innerHTML = bedrijf2;
document.getElementById("post2").innerHTML = post2;
document.getElementById("plaats2").innerHTML = plaats2;
document.getElementById("land2").innerHTML = land2;    

function button() {
    window.localStorage.clear();
}