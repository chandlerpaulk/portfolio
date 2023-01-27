// Server Dependencies
const path = require('path')
const express = require('express')

const app = express()

// Local and Environment Ports
const PORT = process.env.PORT || 5000

// --- MIDDLEWARE --- //

// Set the view engine to use EJS as the template
app.set('view engine', 'ejs')

// Use the Public Directory for front end styles and code
app.use(express.static(path.join(__dirname, 'public')))

// Don't Parse
app.use(express.urlencoded({ extended: false }))

// Serve Homepage
app.get('/', (req, res) => {
    res.render('main/index')
})

// Listen and Log a report of the connection to the server
app.listen(PORT, (err) => {
    if (err) console.log('Error in server setup')
    console.log('Portfolio Server listening on Port:', PORT)
})