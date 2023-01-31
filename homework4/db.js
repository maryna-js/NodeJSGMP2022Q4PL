const Pool = require("pg").Pool;
const pool = new Pool({
    user: "Maryna_Rastargueva",
    password: "password",
    host: "localhost",
    port: 5430,
    database: "postgres"
});

module.exports = pool