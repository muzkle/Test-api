import * as mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'iG3881Ope1',
    password: 'D8HPmuuAUv',
    database: 'iG3881Ope1'
});


function connectDB() {
    connection.connect(function (err) {
        if (err) return console.log(err);
        console.log('CONNECTED TO DATABASE!');
        createTable(connection)
    });
}

connectDB();

connection.on('error', function (err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        connectDB();
    } else {
        throw err;
    }
});

function createTable(conn: any) {
    const sql = "CREATE TABLE IF NOT EXISTS users (\n" +
        "id int NOT NULL AUTO_INCREMENT,\n" +
        "name varchar(150) NOT NULL,\n" +
        "email varchar(150) NOT NULL,\n" +
        "gender varchar(150) NOT NULL,\n" +
        "password char(60) NOT NULL,\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sql, function (error) {
        if (error) return console.log(error);
    });

    
}

export default connection;
