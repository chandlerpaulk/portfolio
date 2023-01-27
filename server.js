// Server Dependencies
const path = require('path')
const express = require('express')

const app = express()

// Environment Ports
const PORT = process.env.PORT || 5000

// Use ejs as the view engine
app.set('view engine', 'ejs')

// give server access to static assets in the public directory
app.use(express.static(path.join(__dirname, 'public')))

// Don't Parse
app.use(express.urlencoded({ extended: false }))

// Serve the homepage to the client
app.get('/', (req, res) => {
    res.render('main/index')
})

// Log a report of the server connection
app.listen(PORT, (err) => {
    if (err) console.log('Error in server setup')
    console.log('Portfolio Server listening on Port:', PORT)
})