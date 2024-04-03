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


  const updateContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: userId }, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  };





module.exports = {getData, getSingle, updateContact};