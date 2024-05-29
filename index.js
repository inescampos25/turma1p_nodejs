const express = require('express');
const mysql = require(`mysql2`);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passord: '',
    database: 'turma1p2023',
    port:3306 //por defeito é 3306
});

connection.connect((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Connected to the database');
    }
});

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Sever listening on port ${port}`);
});

