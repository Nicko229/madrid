const express = require('express');
const router = express.Router();

const productSchema = require('../models/product');


router.get('/', (req, res) => {
  productSchema.find({ id: req.params.id }, (err, product) => {
    if (err) {
      res.status(500).send(error)
    } else {
      // res.status(200).json(product)
      res.json({
        msg: "new get route",
        product: product
      })
    }
  })
});


module.exports = router;