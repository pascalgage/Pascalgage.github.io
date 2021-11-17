/*
1)importer le module express
2)le module express a été installé grâce à la commande: npm install express
*/

const express = require('express');
/*instancier une nouvelle application express vide */
const app = express();
/**
 * Créer une route GET vers la racine de l'application
 */
app.get('/', function(req, res, next) {
    res.end('Hello world FFF !');
});

app.get('/api', function(req, res) {
    res.end('Chemin API');
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
    res.end('Hello' + name);
});

app.listen(8000, function() {
    console.log('server has started')
});