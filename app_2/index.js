const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en" style="background-color: blue;">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>APP - 2</title>
  </head>
  <body style="color: white;">
    <h1>APP_2</h1>
    <br/>
    <strong>
    I could talk about every time that you showed up on time<br/>But I\'d have an empty line \'cause you never did<br/>Never paid any mind to my mother or friends<br/>So I shut \'em all out for you \'cause I was a kid'
    </strong>
    </body>
  </html>
  `;
  res.send(html)
  res.status(200)
})

app.get('/healthcheck', (req, res) => {
  res.status(200)
  res.send('I\'m OK - APP_2')
})

app.listen(port, () => {
  console.log(`APP_2 listening on port ${port}`)
})