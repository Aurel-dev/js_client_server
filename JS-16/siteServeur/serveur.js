// creation du serveur

var express = require("express");
var server = express();
var morgan = require("morgan");
var routeur = require("./routeur");

server.use(express.static("public")); //pour le CSS
server.use(morgan("dev"));
server.use("/",routeur); //redirige vers routeur pour les routes

server.listen(3000); //choisir le port
