const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
    try{
         const db = mongodb.getDb().db();
         const result = await db.collection('contacts').find();
         const list = await result.toArray();
         res.setHeader('Content-Type', 'application/json');
         res.status(200).json(lists);
    } catch (error) {
        console.error('Error fetching contact info', error);
        res.status(500).json({ error: 'Internal server error'});
    }
};

module.exports = {getData};