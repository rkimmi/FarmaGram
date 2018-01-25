const express = require('express')

const router = express.Router()
const db = require('../db.js')

module.exports = router

router.get('/', (req, res) => {
  res.redirect('/home')
})
