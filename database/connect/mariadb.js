const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '5461',
  database: 'portfolio',
  connectionLimit: 5
});

module.exports = pool;