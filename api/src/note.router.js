const availableNotes = require('./notes.data.js');

const express = require('express');
const router = express.Router();

router.route('/notes').get(
    (request, response) => {
        response.json(availableNotes);
    }

);

module.exports = router;