let express = require('express')
let router = express.Router()

router.get('/person' , (req, res) => {
  res.send('You have requested a person')
})

// PARAM property using name
router.get('/person/:name' , (req, res) => {
  res.send(`You have requested a person ${req.params.name}`)
})
module.exports = router



//This is a comment change to push to master via git.
//Removing this change to commit to branch
router.io
//End branch change
//End change
