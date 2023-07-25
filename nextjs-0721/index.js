const express = require('express')
const cors = require('cors')
const app = express()
const port = 5050;
const data = require('../react-0718/src/data.js')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('book이나 bookInsert로 이동');
})

app.get('/book', (req, res) => {
    res.send({ booklist: data });
})

app.post('/bookInsert', (req, res) => {
  const requestname = req.body.name;
  const requestcontent = req.body.content;
  const newData = {
    name : requestname,
    content : requestcontent,
  };
  data.push(newData);
  res.json(newData);
})

app.listen(port,()=>{
  console.log(`${port}번 서버가 열림`)
});