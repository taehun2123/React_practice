const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
  
app.use(cors())

app.get('/',(req, res) => { //'/'로 라우팅이 되면 req,res 함수를 실행한다.
  res.send('Hello World')   //req => request (요청 정보) , res => response (응답 정보)
})

app.get('/sound/:name',(req, res) => {
  // const q = req.params
  // console.log(q)
  const { name } = req.params
  if(name==="dog"){
  res.json({'sound': "멍멍"})
  } else if(name==="cat") {
  res.send({'sound': '냐옹'})
  } else {
  res.send({'sound': '알 수 없음'})
  }
})

app.listen(port) //3000번으로 실행한다.