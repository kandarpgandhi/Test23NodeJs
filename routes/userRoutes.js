const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/', userController.getUsers)
router.post('/:id', userController.addUser)

module.exports = router