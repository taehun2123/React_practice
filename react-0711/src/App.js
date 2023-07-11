import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  //숫자 증가 예제 변수
  const ten = [1,2,3,4,5,6,7,8,9,10];
  const [num, setNum] = useState(5);
  //끝
  //장바구니 예제 변수
  const shop = ["라면", "고기", "쌈장", "마늘", "고추"];
  const [basket, setBasket] = useState(["고기","맥주","소주","미나리"]);
  function addItem(item){
    const temp = [...basket];
    temp.push(item);
    setBasket(temp);
  }
//끝
//햄버거 만들기 예제 변수
  const hamburger = ["빵", "채소", "토마토", "치즈", "고기", "마요네즈", "케찹"];
  const [maker,setMaker] = useState([]);
  const [list,setList] = useState([]);
  function makeHamburger(item){
    const temp = [...maker];
    temp.push(item);
    setMaker(temp);
  }
  function send(){
    list.push([...maker]);
    setMaker([]);
  }
  //끝
  return (
  <div>
    {/* 숫자 증가 예제 */}
    <h1>현재 숫자 : {num}</h1>
    {ten.map((tnum) =>{
      return <button onClick={()=>{
        return setNum(num+tnum);
      }}>{tnum}</button>
    })}
    {/* 장바구니 에제 */}
    <div> 
      <hr/>
      <h2>장바구니</h2>
      <ul>
        {basket.map((item)=>{
          return <li>{item}</li> 
        })}
      </ul>
      <hr/>
      <h2>쇼핑목록</h2>
        {shop.map((list)=>{
          return <button onClick={()=>
            {addItem(list)}
          }>{list}</button>
        })}
    </div>
    <br></br>
    <hr/>
    <hr/>
    {/* 햄버거 예제 */}
    <div>      
      <h2>재료들</h2>
      <div>
        {hamburger.map((item)=>{
          return <button onClick={()=>{
            makeHamburger(item)
          }}>{item}</button>
        })}
      </div>

      <hr/>
      <h2>작업대</h2>
      <ul>
        {maker.map((item)=>{
          return <li>{item}</li>
        })}
      </ul>

      <button onClick={()=>{
        send()
      }}>내보내기!</button>

      <button onClick={()=>{
        setMaker([])
      }}>취소</button>

      <hr/>
      {/* 이중 map 참고 */}
      <h2>리스트</h2> 
      <ul>
        {list.map((item)=>{
          return <li>{item.map((item)=>{
          return <span>| {item} </span>})}
          |</li>})}
      </ul>
    </div>
  </div>
  );
}

export default App;
