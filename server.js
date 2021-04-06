
 const express = require('express')
 bodyParser = require('body-parser')
 const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080;


 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// including route files(html-routes.js and api-routes.js) in server
// Always have the api-route before the html-routes since this data must display on to the html pages
require("./app/routing/api-routes.js")(app);

require("./app/routing/html-routes.js")(app);



app.listen(PORT, function(){
  console.log('App listening on PORT: ' + PORT)
});






// /----------------------------------------------
// Dependencies
// const express = require('express');
// const path = require('path');

// Sets up the Express App
// const app = express();
// const PORT = 3000;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public")); had to use on jasons to get to run

// reservation data
// const reservations = [
//   {
//     name: "Guy",
//     phone: "911",
//     email: "guyeatsfood@gmail.com",
//     uniqueID: "01010",
//   }
// ]

// const waitList =[
//     {
//         name: "Sven",
//         phone: "18001234",
//         email: "sven@gmail.com",
//         uniqueID: "220202",
//     }
// ]


// Routes
// GET
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
// app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
// app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
// app.get('/api/reservations', (req, res) => res.json(reservations));


// POST
// app.post('/api/reservations', (req, res) => {
//   const newReservation = req.body;
//   console.log(newReservation);
//   // logic here on if it lands on reservation or waitlist
//   reservations.push(newReservation);
//   res.json(newReservation); // instead this is true or false based on reservation or waitlist
//   console.log(reservations.length);
// });


// Port listener
// app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
