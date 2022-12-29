const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en" style="background-color: green;">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>APP - 4</title>
  </head>
  <body>
    <h1>APP_4</h1>
    <strong>
      O que é, o que é? <br />
      Clara e salgada <br />
      Cabe em um olho e pesa uma tonelada <br />
      Tem sabor de mar <br />
      Pode ser discreta <br />
      Inquilina da dor <br />
      Morada predileta <br />
      Na calada ela vem <br />
      Refém da vingança <br />
      Irmã do desespero <br />
      Rival da esperança <br />
      Pode ser causada por vermes e mundanas <br />
      E o espinho da flor <br />
    </strong>
    </body>
  </html>
  `;
  res.send(html)
  res.status(200)
})

app.get('/healthcheck', (req, res) => {
  res.status(200)
  res.send('I\'m OK - APP_4')
})

app.get('/rucula', (req, res) => {
  res.json({ query: req.query, headers: req.headers })
  res.status(200)
})

app.listen(port, () => {
  console.log(`APP_4 listening on port ${port}`)
})