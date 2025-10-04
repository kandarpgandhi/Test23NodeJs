const express = require('express')
const router = express.Router()
const busController = require('../controller/busController')

router.post('/', busController.addBus)
router.get('/available/:seats', busController.availableSeat)
module.exports = router