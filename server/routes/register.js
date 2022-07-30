let express = require('express');
let router = express.Router();
const db = require('../models/database');
const mysql = require('mysql');

router.post('/', async (req, res) => {
    const user = req.body.name;
    const password = req.body.password;

    db.getConnection(async (err, connection) => {
        if (err) throw (err);

        const sqlSearch = "SELECT * FROM users WHERE user = ?";
        const search_query = mysql.format(sqlSearch, [user]);
        const sqlInsert = "INSERT INTO users VALUES (0,?,?)";
        const insert_query = mysql.format(sqlInsert, [user, password]);

        await connection.query(search_query, async (err, result) => {
            if (err) throw (err);

            console.log("------> Search Results");
            console.log(result.length);
            if (result.length != 0) {
                connection.release();
                console.log("------> User already exists");
                res.sendStatus(409);
            }
            else {
                await connection.query(insert_query, (err, result) => {
                    connection.release();

                    if (err) throw (err);

                    console.log("--------> Created new User");
                    console.log(result.insertId);
                    res.sendStatus(201);
                });
            }
        });
    });
});

module.exports = router;