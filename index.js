import pg from 'pg';
const { Client } = pg;
const client = new Client({
    user: 'heritier',
    database: 'leads',
    host: 'localhost',
    password: 'mhd123',
});
await client.connect();
// console.log('connexion avec succès');
// client
//     .query('SELECT * FROM persona')
//     .then(res => console.log(res.rows))
//     .catch(e => console.error(e.stack));

import express from 'express';
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.get('/', (req, rep) => {
    client
        .query('SELECT * FROM persona')
        .then(res => {
            rep.render('show', { array: res.rows })  //prendre un fichier ejs et de le transformer en html
        })
        .catch(e => console.log('error'));
})
app.listen(8000, () => {
    console.log('serveur est en marche');
})
