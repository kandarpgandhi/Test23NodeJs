const connection = require('../utils/db-connection');
const db = require('../utils/db-connection')
const addBus = (req, res) => {
    const { busNumber, totalSeats, availableSeats } = req.body
    const insertBusQuery = `INSERT INTO Buses(busNumber,totalSeats,availableSeats) VALUES(?,?,?)`;
    db.execute(insertBusQuery, [busNumber, totalSeats, availableSeats], (err) => {
        if (err) {
            console.log(err)
            res.status(500).send(err.message)
            connection.end()
            return
        }
        console.log('Bus has been inserted')
        res.status(200).send(`Bus with Bus number ${busNumber} successfully added`)
    })
}

const availableSeat = (req, res) => {
    const Seats = parseInt(req.params.seats, 10)
    const query = `SELECT * FROM buses where availableSeats>=?`
    db.execute(query, [Seats], (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send(err.message)
            connection.end()
            return
        }
        res.status(200).json(results)
    })
}
module.exports = {
    addBus, availableSeat
}