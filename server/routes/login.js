let express = require('express');
let router = express.Router();
const db = require('../models/database');
const mysql = require('mysql');

router.post('/', (req, res) => {
    const user = req.body.name
    const password = req.body.password;

    db.getConnection(async (err, connection) => {

        if (err) throw (err);

        const sqlSearch = "Select * from users where user = ?";
        const search_query = mysql.format(sqlSearch, [user]);

        await connection.query(search_query, async (err, result) => {
            connection.release();

            if (err) throw (err);

            if (result.length == 0) {
                console.log("--------> User does not exist");
                res.sendStatus(404);
            }
            else {
                const dbPassword = result[0].password;

                if (password === dbPassword) {
                    console.log("---------> Login Successful");
                    res.send(`${user} is logged in!`);
                }
                else {
                    console.log("---------> Password Incorrect");
                    res.send("Password incorrect!");
                }
            }
        });
    });
});

module.exports = router;