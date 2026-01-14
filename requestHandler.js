const fs = require('fs');
const main_view = fs.readFileSync('./main.html');
const orderlist_view = fs.readFileSync('./orderlist.html');

const mariadb = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    mariadb.query("SELECT * FROM product", function(err, rows) {
        console.log(rows);
    })

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(main_view);
    response.end();    
}


let handle = {}; // key:value
handle['/'] = main;
handle['/order'] = order;
handle['/orderlist'] = orderlist;


exports.handle = handle;