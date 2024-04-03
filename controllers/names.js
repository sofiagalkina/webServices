const { ObjectId } = require('mongodb');

const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
    try{
         const db = mongodb.getDb().db();
         const result = await db.collection('contacts').find();
         const list = await result.toArray();
         res.setHeader('Content-Type', 'application/json');
         res.status(200).json(list);
    } catch (error) {
        console.error('Error fetching contact info', error);
        res.status(500).json({ error: 'Internal server error'});
    }
};


const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((list) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(list[0]);
    });
  };

module.exports = {getData, getSingle};