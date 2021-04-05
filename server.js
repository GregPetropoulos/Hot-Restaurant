// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

// reservation data

const reservations = [
  {
    name: "Guy",
    phone: "911",
    email: "guyeatsfood@gmail.com",
    uniqueID: "01010",
  }
]

const waitList =[
    {
        name: "Sven",
        phone: "18001234",
        email: "sven@gmail.com",
        uniqueID: "220202",
    }
]
// Routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));


app.get('/api/reservations', (req, res) => res.json(reservations));
app.post('/api/reservations', (req, res) => {
  const newReservation = req.body;
  console.log(newReservation);
  // logic here on if it lands on reservation or waitlist
  reservations.push(newReservation);
  res.json(newReservation); // instead this is true or false based on reservation or waitlist
  console.log(reservations.length);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
