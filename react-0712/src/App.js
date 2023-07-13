import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([
    {
      id : 1,
      name : "cola",
      cnt : 0,
      price : 2000
    },
    {
      id : 2,
      name: "soda",
      cnt : 0,
      price : 2000
    },
    {
      id : 3,
      name: "beer",
      cnt : 0,
      price : 2000
      },
    {
      id : 4,
      name: "soju",
      cnt : 0,
      price : 2000
      }
  ])
  const [order, setOrder] = useState([]);
  const [list,setList] = useState([]);
  const addList = (objectId, objectName) => {
    const counter = data.map((obj)=>{
      if(obj.id === objectId){ //ID별로 객체 cnt 조절
        return {
          ...obj,
          cnt: obj.cnt+1,
        };
      }
      return obj;
    });
      setData(counter);
    if(!list.includes(objectName)){ //리스트 이름 중복 방지
      setList([...list, objectName]);
    }
  };

  const reset = () => { //주문하기 버튼(리셋)
    const tempOrder = [...list];
    setOrder(order.concat(tempOrder));
    setList([]); //list 초기화
    const resetData = data.map((obj)=>{ //cnt 초기화
      return {
      ...obj,
      cnt: obj.cnt = 0,
      };
    });
      setData(resetData);
  }
  return (
    <div>
      {data.map((item)=>{
        return <button onClick={()=>{
            addList(item.id, item.name)
          }}>{item.id}</button>
      })}
      <br/><br/>
      <button onClick={()=>(reset())}>주문하기</button>
      <ul>
        {list.map((name, id)=>{
          return <li key={id}>{data.find((obj) => obj.name === name)?.id}번메뉴 {name} * {data.find((obj) => obj.name === name)?.cnt}</li>})}
      </ul>
      <hr/>
      <ul>
        {order.map((item)=>{
          return <li>{item} * {item.cnt}</li>})}
      </ul>
    </div>
  );
}

export default App;
