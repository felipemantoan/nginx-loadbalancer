const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en" style="background-color: yellow;">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>APP - 3</title>
  </head>
  <body>
    <h1>APP_3</h1>
    <strong>
      Let the voice of reason shine <br />
      Let the pious vanish for all times <br />
      God's face is hidden, all unseen <br />
      You can't ask Him what it all means <br />
      He was never on your side <br />
      God was never on your side <br />
      Let right or wrong, alone decide <br />
      God was never on your side <br />
    </strong>
    </body>
  </html>
  `;
  res.send(html)
  res.status(200)
})

app.get('/healthcheck', (req, res) => {
  res.status(200)
  res.send('I\'m OK - APP_3')
})

app.get('/alface', (req, res) => {
  res.json({ query: req.query, headers: req.headers })
  res.status(200)
})

app.listen(port, () => {
  console.log(`APP_3 listening on port ${port}`)
})