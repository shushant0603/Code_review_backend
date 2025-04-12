const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors())


app.use(cors({
    origin: 'https://code-review-frontend-shushant-kumars-projects.vercel.app/',
    methods: ['GET', 'POST'],
    credentials: true,
  }));

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app