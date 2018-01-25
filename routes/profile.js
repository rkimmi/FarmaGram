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
      const profile = profiles[0]
      dataObj.userId = profile.userId
      dataObj.userName = profile.userName
      dataObj.animalName = profile.animalName
      dataObj.profileId = profile.profileId
      dataObj.bio = profile.bio
      dataObj.email = profile.email
      db.getImagesOfProfile(userId)
        .then(images => {
          console.log(images)
          dataObj.images = images
          res.render('profile', dataObj)
        })
    })
})

module.exports = router
