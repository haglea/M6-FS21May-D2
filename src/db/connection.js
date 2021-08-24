/* import pkg from "pg";
const { Pool } = pkg;
*/

import pg from "pg"; //grabbing the whole package
// pools will use environment variables
// for connection information
const { Pool } = pg; //destructuring the package here

/* import { Pool } from "pg"; */

/* const pool = new Pool();
const db = {
    query: pool.query,
}; */

const db = new Pool(); //connecting node.js to the PostgreSQL server

export default db;