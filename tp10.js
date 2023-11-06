function seconnecter(){
var login = prompt("Donner votre nom d'utilisateur")
var password = prompt("Entrer votre mot de passe ")
if (login =="admin" && password=="admin"){
document.write("Bienvenue : " + login);
}
else {
alert("Accèes refusé")
}

function seconnecter2(){
	window.location.href ="https://github.com/mehdiidhemm/mission2/blob/main/seconnecter2.html"

}

function connexion2(){
var username = document.getElementById("usernameInput").value;
var password = document.getElementById("passwordInput").value;
if (username =="admin" && password=="admin")
	windox.location.href = "page1.html";

}else {
	windox.location.href = "page2.html";

}

function cdc() {
	var chaine = prompt("Donner un mot")
	document.write(chaine.toUpperCase()+"<br>");
	document.write(chaine.toLowerCase()+"<br>");
	document.write("la chaine contient    " + chaine.lenght+"caractères" + "<br>");
	document.write("la première lettre est    " + chaine.substr(0,1) + "<br>");
	
	
}

function affichagetab() {
	document.write("<table borrder=2px width");
    for(let i = 0 ; i <= 5; i++){
    	document.write('<tr><td>*</td><td>*</td><td>*</td></tr>')
    }
    document.write('</table>')
}