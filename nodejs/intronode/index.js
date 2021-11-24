/**
 * importer le module express
 * le module express a été installé grâce à la commande :
 * "npm install express"
 */
const express = require('express');

/**
 * Instancier une nouvelle application express vide
 */
const app = express();

/**
 * Créer une route GET vers la racine de l'application
 */
app.get('/', function(req, res) {
    res.end('Hello world !');
});

/**
 * Route GET '/api' qui est une ressource virtuelle
 * ressource virtuelle = n'existe pas physiquement sur le serveur
 */
app.get('/api', function(req, res) {
    let name = req.query.name;
    res.end('Bonjour ' + name);
});

/**
 * Route GET '/api/:id'
 * :id = partie du chemin dynamique
 */
app.get('/api/:id', function(req, res) {
    let name = req.params.id;
    res.end('Hello ' + name);
});


/**
 * Démarrage du serveur 
 * Le serveur écoute sur le port 8000
 */
app.listen(8000, function() {
    console.log('server started');
});