const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
var app = express();
const port = 7050

app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
        response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(7050, () => {
        console.log(`App running on port ${port}.`)
})