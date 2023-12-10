const express = require('express');
const csrf = require('csrf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const server = express();

const mysql = require('mysql2');

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'datatable'
});

db.connect((err) => {
    if (err) {
        console.error('error connecting to database');
        return;
    }

    console.log('connecting to database');
});

server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(csrf({ cookie: true }));

server.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

server.get('/', (req, res) => {
    
})