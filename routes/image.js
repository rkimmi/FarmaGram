const express = require('express')

const router = express.Router()
const db = require('../db.js')

module.exports = router

router.get('/:id', (req, res) => {
  db.displayImage(req.params.id)
    .then(data => {
      console.log(data)
      res.render('image', {data: data[0]})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
