// server/populateDB.js
const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const Pickup = require('./models/pickup');
const Exceptions = require('./models/exceptions');
const Delivered = require('./models/delivered');
const Returned = require('./models/returned');

mongoose.connect('mongodb+srv://admin:Qpfg89inAPkkBvg7@cluster0.bfk4xik.mongodb.net/zywaDB');

const db = mongoose.connection;
db.once('open', async () => {
  console.log('Connected to database');

  // Read pickup.csv
  fs.createReadStream('../data/pickup.csv')
    .pipe(csv())
    .on('data', async (row) => {
      await Pickup.create({ id: row.id, cardid: row.cardid, phone: row.phone, timestamp: row.timestamp});
    })
    .on('end', () => {
      console.log('Pickup data loaded');
    });

  // Read exeception.csv
  fs.createReadStream('../data/exceptions.csv')
    .pipe(csv())
    .on('data', async (row) => {
      await Exceptions.create({ id: row.id, cardid: row.cardid, phone: row.phone, timestamp: row.timestamp, comment: row.comment});
    })
    .on('end', () => {
      console.log('Exception data loaded');
    });
    //Read delivery.csv
    fs.createReadStream('../data/delivered.csv')
    .pipe(csv())
    .on('data', async (row) => {
      await Delivered.create({ id: row.id, cardid: row.cardid, phone: row.phone, timestamp: row.timestamp, comment: row.comment});
    })
    .on('end', () => {
      console.log('Delivery data loaded');
    });
    //Read returned.csv
    fs.createReadStream('../data/returned.csv')
    .pipe(csv())
    .on('data', async (row) => {
      await Returned.create({ id: row.id, cardid: row.cardid, phone: row.phone, timestamp: row.timestamp});
    })
    .on('end', () => {
      console.log('Returned data loaded');
    });
});
