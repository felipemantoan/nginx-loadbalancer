const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('APP_2')
  res.status(200)
})

app.get('/healthcheck', (req, res) => {
  res.status(200)
  res.send('I\'m OK - APP_2')
})

app.listen(port, () => {
  console.log(`APP_2 listening on port ${port}`)
})