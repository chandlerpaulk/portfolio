// Server Dependencies
const path = require('path')
const express = require('express')

const app = express()

// Environment ports
const PORT = process.env.PORT || 5000

// Use EJS as the view engine template
app.set('view engine', 'ejs')

// Access public directory for application's assets
app.use(express.static(path.join(__dirname, 'public')))

// Don't parse
app.use(express.urlencoded({ extended: false }))

// Serve homepage to client
app.get('/', (req, res) => {
    res.sendStatus(200)
    res.render('index')
})

// Confirm we're properly connected to the server
app.listen(PORT, (err) => {
    if (err) console.log('Error in server setup')
    console.log('Portfolio Server listening on Port:', PORT)
})