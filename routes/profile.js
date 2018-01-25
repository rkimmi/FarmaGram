const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/:id', (req, res) => {
  const userId = req.params.id
  const dataObj = {
    userId: null,
    userName: null,
    animalName: null,
    profileId: null,
    bio: null,
    email: null,
    images: []
  }
  db.getUserProfile(userId)
    .then(profiles => {
      dataObj.userId = profiles[0].userId
      dataObj.userName = profiles[0].userName
      dataObj.animalName = profiles[0].animalName
      dataObj.profileId = profiles[0].profileId
      dataObj.bio = profiles[0].bio
      dataObj.email = profiles[0].email
      db.getImagesOfProfile(userId)
        .then(images => {
          dataObj.images = images
          res.render('profile', dataObj)
        })
    })
})
