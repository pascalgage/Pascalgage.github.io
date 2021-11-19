const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());

var json = require(__dirname + '/movies.json');

app.get('/movies', function(req, res) {

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

app.get('/movies/awards/:awards', (req, res) => {
    let awards = req.params.awards.toLowerCase();
    res.json(json.data.filter(m => m.movie_awards.toLowerCase() == awards))
})

app.get('/movies/year/:years', (req, res) => {
    let years = req.params.years;
    res.json(json.data.filter(m => m.movie_year == years))
})


app.get('/movies/awards/:awards/year/:year', (req, res) => {
    let awards = req.params.awards.toLowerCase();
    let years = req.params.year;
    res.json(json.data.filter(m => m.movie_awards.toLowerCase() == awards && m.movie_year == years))
})




app.listen(80);