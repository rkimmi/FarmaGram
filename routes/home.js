const express = require('express')

const router = express.Router()
const db = require('../db.js')

module.exports = router

router.get('/', (req, res) => {
  db.displayHome()
    .then(data => {
      res.render('home', {data: data})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
