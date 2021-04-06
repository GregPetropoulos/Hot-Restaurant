// This js helps our data to determine what the user 
// sees and what data the user is able to post onto 
// the server to store

// brought in data from table-data, and waitinglist-data with require
const tableData = require('../data/table-data');
const waitListData = require('../data/waitinglist-data');

// bring in app the express variable
module.exports = function (app){

    // Using get function when user clicks on tables this will display tableData json object
    app.get('/api/tables', function(req, res){
        res.json(tableData);
    })

    app.get('/api/waitlist', function(req, res){
        res.json(waitListData);
    })
    // post method for user to enter data to get placed at a table or waiting list.
    // This html script tags are important to this part.
    app.post('/api/tables', function(req, res){
        if(tableData.length < 5){
            tableData.push(req.body);
            res.json(true);
        } else{
            waitListData.push(req.body);
            res.json(false);
        }
    });
// This will clear out the tables see matching ajax on tables html
    app.post('/api/clear', function(){
        tableData =[];
        waitListData =[];

        console.log(tableData);
        console.log(waitListData);

    })
}