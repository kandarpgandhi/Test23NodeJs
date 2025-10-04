const express = require('express')
const app = express()
const db = require('./utils/db-connection')
const userRoutes = require('./routes/userRoutes')
const busRoutes = require('./routes/busRoutes')
app.use(express.json())

app.use('/user', userRoutes)
app.use('/bus', busRoutes)
app.listen(3000, (err) => {
    console.log('Server is running')
})

