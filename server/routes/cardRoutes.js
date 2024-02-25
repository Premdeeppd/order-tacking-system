const express = require('express');
const Delivered = require('../models/delivered');
const Exceptions = require('../models/exceptions');
const Pickup = require('../models/pickup');
const Returned = require('../models/returned');

const router = express.Router();

router.post('/get_card_status', async (req, res) => {
  const {cardid} = req.body;
  const collections = [Returned, Delivered, Exceptions, Pickup];

  try {
      for (const Model of collections) {
          const query = {cardid};
          const result = await Model.findOne(query);
          if(Model === Pickup && !result){
            return res.json({ answer: "Invalid Card ID, Please try again." });
          }
          if(!result) continue;

          if(Model===Exceptions){
            return res.json({ answer: result.comment });
          }
          else if(Model===Pickup){
            return res.json({ answer: "Picked-Up" });
          }
          else if(Model===Delivered){
            return res.json({ answer: result.comment });
          }
          else if(Model===Returned){
            return res.json({ answer: "Returned Back to Seller" });
          }
          else{
            return res.json({ answer: "Not Found" });
          }
      }

      return res.json({ status: "Not Found" });

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
