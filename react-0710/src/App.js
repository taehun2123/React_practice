import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [num, setNum] = useState(1);
  const data = [
    {
      name : "박태광",
      age : 25,
      major : "IOT",
      likeFood : ["햄버거","치킨","피자"]
    },
    {
      name : "김태훈",
      age : 23,
      major : "SW",
      likeFood : ["햄버거","치킨","피자"]
    },
    {
      name : "최지호",
      age : 21,
      major : "IOT",
      likeFood : ["햄버거","치킨","피자"]
    },
    {
      name : "박지원",
      age : 21,
      major : "SW",
      likeFood : ["햄버거","치킨","피자"]
    },
    {
      name : "장민욱",
      age : 21,
      major : "SW",
      likeFood : ["햄버거","치킨","피자"]
    },
    {
      name : "안소영",
      age : 21,
      major : "SW",
      likeFood : ["햄버거","치킨","피자"]
    },
    ,
    {
      name : "엄지석",
      age : 21,
      major : "SW",
      likeFood : ["햄버거","치킨","피자"]
    },

  ]
  return(
  <div>
    {data.map((user) =>(
      <ul>
        <li>
          <a>{user.name}</a>
            <ul>
              <li>나이 : {user.age}</li>
              <li>전공 : {user.major}</li>
              <li>음식 : {user.likeFood.map((food) =>(
                <ul><li>{food}</li></ul>
              ))}</li>
            </ul>
        </li>
      </ul>
    ))}
    <div>
      <h1>현재 숫자 : {num}</h1>
      <button onClick={()=>{
        setNum(num+1);
      }}>올리기</button>
      <button onClick={()=>{
        setNum(num-1);
      }}>내리기</button>
    </div>
  </div>
  )
}

export default App;
