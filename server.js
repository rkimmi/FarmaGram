const path = require('path')

const express = require('express')

const bodyParser = require('body-parser')

const hbs = require('express-handlebars')

const rootRoutes = require('./routes/root')

const profileRoutes = require('./routes/profile')

const server = express()

module.exports = server
