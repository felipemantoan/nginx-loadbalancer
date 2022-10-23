const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200)
  res.send('APP_1')
})

app.get('/healthcheck', (req, res) => {
  res.status(200)
  res.send('I\'m OK APP_1')
})

app.listen(port, () => {
  console.log(`APP_1 listening on port ${port}`)
})