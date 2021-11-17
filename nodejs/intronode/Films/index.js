const express = require('express');

const app = express();

var json = require(__dirname + '/movies.json');

app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.setHeader('X-toto', 'salut les copains');

    res.end(JSON.stringify(json));

});

app.get('/movies/:id', (req, res) => {
    let id = req.params.id
    let movie = json.data.find(m => m.movie_id == id)
    res.json(movie)
})

app.get('/movies/subject/:sub', (req, res) => {
    let sub = req.params.sub;
    res.json(json.data.filter(m => m.movie_subject == sub))
})

app.listen(80);