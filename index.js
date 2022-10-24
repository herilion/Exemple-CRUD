import { Client } from 'pg';
const client = new Client({
    user: 'heritier',
    database: 'leads',
    host: 'localhost',
    password: 'mhd123',
});
await client.connect();
console.log('connexion avec succès');