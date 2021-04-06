// This js helps the user when they click on a link
// page they receive the appropriate page

const path = require("path");

// sends user the tables page use sendFile() method in function
module.exports = function (app) {
  // for tables
  app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/tables.html"));
  });

// for reserve
  app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/reserve.html"));
  });

  // for homepage on video 10:50
  //  https://www.youtube.com/watch?v=G7RvQMW2DOg&list=PLgJ8UgkiorCmI_wKKVt5FlkTG63sQF6rr
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};
