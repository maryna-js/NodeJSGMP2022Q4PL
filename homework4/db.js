const Pool = require("pg").Pool;
const pool = new Pool({
    user: "Maryna_Rastargueva",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

pool.connect(function(err, client, done) {
    if(err) {
        console.log(err);
    }
    client.on('notification', function(msg) {
        console.log(msg);
    })
    client.query("LISTEN channel");
    done();
});

module.exports = pool