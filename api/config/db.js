import mysql from "mysql2/promise";

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: "151.106.97.204",
    user: "u189463349_user",
    database: "u189463349_pos_system",
    password: "tG]Dt1TDBY6+",
    waitForConnections: true,
    connectionLimit: 10
});

export default pool