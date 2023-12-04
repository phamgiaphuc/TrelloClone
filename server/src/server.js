import express from 'express';
const app = express();
const hostname = 'localhost';
const port = 8000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}/`)
})