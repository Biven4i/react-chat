/**
 *Module dependencies.
 */

const app = require('./app');
const debug = require('debug')('server:server');
const http = require('http');
const { Server } = require("socket.io");
const db = require('./models/database');
const mysql = require('mysql');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '9000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// socket.io
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
let dbMessages = [];
io.on("connection", socket => {
    db.getConnection(function (err, connection) {
        if (err)
            throw (err);

        connection.query("SELECT * FROM `messages` WHERE 1", (err, result) => {
            if (err)
                throw (err);
            dbMessages = [];
            for (let obj of result) {
                dbMessages.push([Object.values(obj)[3], Object.values(obj)[1], Object.values(obj)[2]]);
            }
            socket.emit('dbConnect', dbMessages);
        });
    });
    socket.on('checkLogIn', user => {
        db.getConnection(async (err, connection) => {
            if (err) throw (err);

            const sqlSearch = "SELECT isLoggedIn FROM users WHERE user = ?"
            const search_query = mysql.format(sqlSearch, user);
            connection.query(search_query, (err, result) => {
                if (err) throw (err);
                socket.emit('checkLogInResponse', Object.values(result[0])[0]);
            });
        });
    });
    socket.on('message', (message, user) => {
        db.getConnection((err, connection) => {
            if (err) throw (err);

            const sqlInsert = "INSERT INTO messages (message, username) VALUES (?, ?)";
            const insert_query = mysql.format(sqlInsert, [message, user]);

            connection.query(insert_query, (err, result) => {
                if (err) throw (err);
            });
        });
        io.emit('messageResponse', message, user);
    })
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}