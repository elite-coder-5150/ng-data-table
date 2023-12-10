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
})