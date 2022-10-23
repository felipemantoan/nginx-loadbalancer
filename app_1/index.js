const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200)
  res.send('<h1>APP_1</h1><br/>Tentando dar meu melhor na minha pior fase<br/>Sabe como é, menor<br/>Feridas se curam com o tempo, não com gaze<br/>')
})

app.get('/healthcheck', (req, res) => {
  res.status(200)
  res.send('I\'m OK - APP_1')
})

app.listen(port, () => {
  console.log(`APP_1 listening on port ${port}`)
})