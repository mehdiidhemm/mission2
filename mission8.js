document.body.style.backgroundColor = "grey";

function f0(){
    let test=prompt("Merci d'inscrire une chaine de caracteres");
    document.body.innerHTML=test;}
 
 function f1(){
     let a=42;
     let b=7569;
     let result=a+b;
     alert(result);}
 
 function f2(){    
     let note_maths=11;
     let note_francais=9;
     let note_hg=16;
     let moyenne= (note_maths + note_francais + note_hg) /3;
     alert("La moyenne est de "+moyenne)}
 
function f3(){
    let budget=1553.89;
    let achats=1554.76;
    if(budget>=achats){
        alert("Le budget ("+budget+" euros) permet de payer tous les achats ("+achats+" euros)")}
        else{alert("Le budget ("+budget+" euros) ne permet pas de payer tous les achats ("+achats+" euros)")};}
    
 function f4(){
    let ht=prompt("Montant HT?");
    let ttc=ht*1.2;
    document.body.innerText=ttc;}
 
 function f5(){
    let ht=prompt("Montant HT?");
    let taux_tva=prompt("Taux de TVA?");
    let taux_tva_calcul=(taux_tva/100)+1;
    let ttc=ht*taux_tva_calcul;
    document.body.innerText=ttc;}
 
 function f6(){
    let ht=prompt("Montant HT?");
    let taux_tva=prompt("Taux de TVA?");
    let ttc=ht*(taux_tva/100)+1;
    if(ttc>100){document.body.innerHTML='<h1 style="color:red;">'+ttc+"</h1>";}
    else{document.body.innerHTML='<h1 style="color:green;">'+ttc+"</h1>";}}
 
 function f7(){document.getElementById('cocktail').innerText = 'Long Island Iced Tea';}
 
 function f7site(){window.location.href="ex7.html"}

 function f8(){
    for(let i=10;i<=1000;i+=10){console.log(i);}}
 
 function f9(){let age=prompt("Quel est votre âge ?");
    if(age >= 18) {alert('Vous êtes majeur !');}
        else {alert('Vous êtes mineur !');}}
 
 function f10(){let cp=77000;
    while(cp<=77999) {
       console.log(cp);
       cp++;}}
 
 function f11(){let n=5;
    let html='';
    for(let i=1;i<=10;i++){
       html=html+n+' x '+i+' = '+(n*i)+' <br />';}
    document.body.innerHTML=html;}
 
 function f12(){let html='';
    for(let i=1;i<=5;i++){
        for(let k=1;k<=i;k++){
        html=html+i;}
        html=html+'<br />';}
    document.body.innerHTML=html;}
 
 function f13(){let html='';
    let k=0;
    while(k<=20){
        html=html+k+'<br />';
        k=k+2;}
    document.body.innerHTML=html;}
 
 function f14(){let tableau='<table>';
    let lignes=5;
    let colonnes=3; 
    for(let i=1;i<=lignes;i++){
        tableau=tableau+'<tr>';
        for(let k=1;k<=colonnes;k++){
        tableau=tableau+'<td>yolo</td>';}
        tableau=tableau+'</tr>';}
    tableau=tableau+'</table>';
    document.body.innerHTML=tableau;}
 
 function f15(){let lignes=prompt("Nombre de lignes ?");
    let colonnes=prompt("Nombre de colonnes ?");
    let tableau='<table>';
    for(let i=1;i<=lignes;i++) {
        tableau=tableau+'<tr>';
        for(let k=1;k<=colonnes;k++) {tableau=tableau+'<td>yolo</td>';}
        tableau=tableau+'</tr>';}
    tableau=tableau+'</table>';
    document.body.innerHTML=tableau;}
 
 function f16(){let html='<ul>';
    let nalea=10;
    for(let i=0;i<nalea;i++){
        html=html+'<li>'+Math.floor(Math.random()*100)+'</li>';}
        html=html+'</ul>';
        document.body.innerHTML=html;}
 
 function f17(){let html='<ul>';
    let nalea=10;
    for(let i=0;i<nalea;i++){
        let tmp=Math.floor(Math.random()*11);
        if(tmp==10){
            console.log('Le nombre 10 fait parti du tirage.');}
            html=html+'<li>'+tmp+'</li>';}
        html=html+'</ul>';
        document.body.innerHTML=html;}
 
 function f18(){let html='<ul>';
    let nalea=10;
    let nalea10=0;
    for(let i=0;i<nalea;i++) {
        let tmp=Math.floor(Math.random()*11);
        if(tmp==10) {
        nalea10++;
        }
        html=html+'<li>'+tmp+'</li>';
    }
    html=html+'</ul>';
    html=html+'<p>Il y a eu '+nalea10+' tirages de 10.</p>'
    document.body.innerHTML=html;}
 
 function f19(){let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let color="rgb("+r+","+g+","+b+")";
    document.body.style.background=color;}
function valide(){
  string_box = document.getElementById("chaine");
  char_box = document.getElementById("caractere");
  if(string_box.value == "" || char_box.value == "") return;
  if(char_box.value.length > 1) return;

  alert(`La chaine de caractère [${string_box.value}] à longueur ${string_box.value.length} les chaine de caractère ayant une majucule ${string_box.value.toUpperCase()} le caractère [${char_box.value}] apparait ${string_box.value.count(char_box.value)}`);
}
function recherche(){
    console.log("entrer");
  string_box = document.getElementById("chaine");
  string_box2 = document.getElementById("chaine2");
  if(string_box.value == "" || string_box2.value == "") return;
  console.log("entrer");
  alert(`Le caractère est [${string_box.value}] contient la sous-chaîne [${string_box2.value}] ${countSubstrings(string_box.value, string_box2.value)}`);
}
String.prototype.count=function(c) {
    var result = 0, i = 0;
    for(i;i<this.length;i++)if(this[i]==c)result++;
    return result;
  };
  
  const countSubstrings = (str, searchValue) => {
    let count = 0,
      i = 0;
    while (true) {
      const r = str.indexOf(searchValue, i);
      if (r !== -1) [count, i] = [count + 1, r + 1];
      else return count;
    }
  };
