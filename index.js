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