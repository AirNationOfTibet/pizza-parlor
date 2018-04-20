const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('made it to orders router.get')
  const queryText = `SELECT * FROM "order"`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT order query', err);
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {

    const newOrder = req.body;
    let newOrderTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log(newOrder);
    const queryText = `
    INSERT INTO "order" ("customer_name", "order_total", "time")
    VALUES ($1, $2, $3)
    `;
  
    const queryValues = [
        newOrder.customer_name,
        newOrder.order_total,
        newOrderTime
    ];

  pool.query(queryText, queryValues)
  .then(() => { res.sendStatus(200); })
  .catch((err) => {
    console.log('Error completing PUT order query', err);
    res.sendStatus(500);
  });
});



module.exports = router;