const express = require('express');
const PORT = process.env.PORT || 5000
const colors = require('colors');
const dotenv = require('dotenv');
const app = express()

const userRoute = require("./routes/user.route")
const adminRoute = require("./routes/admin.route")
const generalRoute = require("./routes/general.route")
const candidateRoute = require("./routes/candidate.route")
const hiringManagerRoute = require("./routes/hiringManager.route")

dotenv.config()
app.use(express.json())

// Routes
app.use('/api/', generalRoute)
app.use('/api/user', userRoute)
app.use('/api/admin', adminRoute)
app.use('/api/', candidateRoute)
app.use('/api/', hiringManagerRoute)

// Database Connect
require('./config/dbConfig')

// Health Check
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`.bold.red);
})