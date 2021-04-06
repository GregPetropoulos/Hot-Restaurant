// This js helps our data to determine what the user 
// sees and what data the user is able to post onto 
// the server to store

// brought in data from table-data, and waitinglist-data with require
const tableData = require('../data/table-data');
const waitListData = require('../data/waitinglist-data');

// bring express
module.exports = function (app){

    // Using get function when user clicks on tables this will display tableData json object
    app.get('/api/tables', function(req, res){
        res.json(tableData);
    })

    app.get('/api/waitlist', function(req, res){
        res.json(waitListData);
    })
}