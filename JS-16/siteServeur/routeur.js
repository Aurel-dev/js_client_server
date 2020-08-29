var express = require("express");
var routeur = express.Router();
const twig = require("twig");

routeur.get("/", (requete, reponse) =>{ //la requete et la reponse permettent de communiquer avec le serveur
    console.log("Page d'accueil demandée")
    reponse.render("accueil.html.twig"); //renvoie la page HTML TWIG
})

routeur.get("/livres", (requete, reponse) =>{ //la requete et la reponse permettent de communiquer avec le serveur
   reponse.render("livres/liste.html.twig")
})

routeur.get("/livres/:nom", (requete,reponse) =>{
   console.log(requete.params.nom)
   reponse.render("livres/livre.html.twig",{nom:requete.params.nom}) //permet d'afficher le titre du livre dans livre.html.twig
})

 // gère l'erreur 404
 routeur.use((requete,reponse,suite) => {
     const error = new Error("Page non trouvée");
     error.status= 404;
     suite(error); //envoi à la route ci-dessous avec "error" générée
 })

// Gère toutes les erreurs
routeur.use((error,requete,reponse) => {
     reponse.status(error.status || 500); //error 500 = erreur serveur
     reponse.end(error.message);
 })

 module.exports = routeur;