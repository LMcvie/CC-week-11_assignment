const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

const cors = require("cors");
app.use(cors())
app.use(express.json());

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('hotel_checkins');
    const bookingCollection = db.collection('bookings');
    const bookingRouter = createRouter(bookingCollection);
    app.use('/api/bookings', bookingRouter); // NEW
  })
  .catch(console.error);


app.listen(5000, function () {
  console.log('App running on port 5000');
});
