const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

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
  <body style="color: white;">
  <h1>APP_1</h1><br/>
  <strong>
    Tentando dar meu melhor na minha pior fase <br />
    Sabe como é, menor <br />
    Feridas se curam com o tempo, não com gaze <br />
    E quando ganhei meu dinheiro eu perdi a base <br />
    Logo eu que fiz gritos pros excluídos <br />
    Tiração pros instruídos <br />
    Chegar aqui de onde eu vim <br />
    É desafiar a lei da gravidade <br />
    Pobre morre ou é preso, nessa idade <br />
    Saudade quando era chinelin no pé <br />
  </strong>
  </body>
  </html>
  `;
  res.send(html)
  res.status(200)
})

app.get('/bisteca', (req, res) => {
  res.json({ query: req.query, headers: req.headers })
  res.status(200)
})

app.get('/healthcheck', (req, res) => {
  res.status(200)
  res.send('I\'m OK - APP_1')
})

app.listen(port, () => {
  console.log(`APP_1 listening on port ${port}`)
})