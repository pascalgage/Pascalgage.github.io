import { Db } from './db.js';

class DbMovies extends Db
{
    constructor() 
    {
        super('http://localhost/movies');
    }
}

export { DbMovies, Db }