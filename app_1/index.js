const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en" style="background-color: red;">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>APP - 1</title>
  </head>
  <body>
  <strong>
    <h1>APP_1</h1><br/>Tentando dar meu melhor na minha pior fase<br/>Sabe como é, menor<br/>Feridas se curam com o tempo, não com gaze<br/>
  </strong>
  </body>
  </html>
  `;
  res.send(html)
  res.status(200)
})

app.get('/healthcheck', (req, res) => {
  res.status(200)
  res.send('I\'m OK - APP_1')
})

app.listen(port, () => {
  console.log(`APP_1 listening on port ${port}`)
})