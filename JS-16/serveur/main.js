var txt = "";
for(var i = 1; i < 11; i++){
    txt += i + " * " + 5 + " = " + (i*5) + "\n"; 
}
console.log(txt);
// document.querySelector(".resultat").innerHTML = txt;
// querySelector n'est pas utilisable dans le navigateur