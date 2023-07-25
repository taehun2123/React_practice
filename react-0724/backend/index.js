const express = require("express")
const app = express()
const port = 5050;
const cors = require('cors')

const bookList = [
{
  name : "책",
  content : "책의 내용",
},
{
  name : "책2",
  content : "책의 내용",
}]

app.use(cors())
app.use(express.json())

app.get("/", function(req,res){
  res.send({msg : "Hello world"})
})

app.get("/book", function(req,res){
  res.send(bookList)
})

app.post("/bookinsert", function(req,res){
  const reqName = req.body.name;
  const reqContent = req.body.content;
  bookList.push({
    name : reqName,
    content : reqContent,
  })
  res.send({msg:"good!"})
})

app.listen(port)