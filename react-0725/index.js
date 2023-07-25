const express = require("express")
const app = express()
const cors = require("cors")
const bookList = [
  {
  name : "책1",
  content : "책1내용",
  }
]

app.use(cors())
app.use(express.json())
app.get("/", (req,res)=>{
  res.send({msg: "hello"})
})

app.get("/book", (req, res)=>{
  res.send({list : bookList})
})
app.post("/bookInsert", (req, res)=>{
  const reqName = request.body.name
  const reqContent = request.body.content
  bookList.push({name : reqName, content : reqContent})
  res.send({msg : "good"})
})
app.listen(5050)