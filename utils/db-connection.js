const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abc@123',
    database: 'testDb'
})

connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Connection has been created')
    const creationUserQuery = `CREATE TABLE IF NOT EXISTS Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
)`

    connection.execute(creationUserQuery, (err) => {
        if (err) {
            console.log(err)
            connection.end()
            return
        }
        console.log('User Table is created')
    })
    //id, busNumber, totalSeats, availableSeats
    const creationBusQuery = `CREATE TABLE IF NOT EXISTS Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT,
    totalSeat INT,
    availableSeats INT
)`
    connection.execute(creationBusQuery, (err) => {
        if (err) {
            console.log(err)
            connection.end()
            return
        }
        console.log('Bus Table is created')
    })

})

module.exports = connection