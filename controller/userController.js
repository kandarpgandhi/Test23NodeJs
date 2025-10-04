const connection = require('../utils/db-connection')
const db = require('../utils/db-connection')

const addUser = (req, res) => {
    const { name, email } = req.body
    const insertUser = `INSERT INTO users(name,email) VALUES(?,?)`
    db.execute(insertUser, [name, email], (err) => {
        if (err) {
            console.log(err)
            res.status(500).send(err.message)
            connection.end()
            return
        }
        console.log('User has been inserted')
        res.status(200).send(`User with name ${name} added`)
    })
}

const getUsers = (req, res) => {
    const getUserQuery = `select * from users`
    db.execute(getUserQuery, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send(err.message)
            connection.end()
            return
        }
        res.status(200).json(result)
    })
}

module.exports = {
    addUser, getUsers
}