const express = require('express');
const router = express.Router();

const Data = require('../../models/Data');

// @route GET api/data
// @desc Get all items
// @access public
router.get('/', (req, res) => {
    Data.find()
        .then(data => res.json(data))
});

// @route POST api/data
// @desc create a post
// @access public
router.post('/', (req, res) => {
    const newData = new Data({
        email: req.body.email,
        password: req.body.password
    });

    newData.save().then(data => res.json(data));
});

// @route DELETE api/data/:id
// @desc DELETE A ITEM
// @access public
router.delete('/:id', (req, res) => {
    Data.findById(req.params.id)
        .then(data =>data.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}));
});

module.exports = router;