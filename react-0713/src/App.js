import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(""); //State 변수 선언
  const [price,setPrice] = useState("");
  const [data,setData] = useState([]);
  const [result,setResult] = useState([]);

  function upload(){ //발주하기 함수
    setResult((prevResult) => [...prevResult, [...data]]);
    setData([]);
  }

  function addItem(){ //등록하기 함수
    const temp = [...data];
    let isInclude = false;
    let index = 0;
    temp.map((item,idx)=>{
      if(item.name === name){
        isInclude = true;
        index = idx;
      }
    });
    if(isInclude){ 
      temp[index].count += 1
    } else {
    temp.push({
      name : name,
      price : price,
      count : 1,
      id : 0
    })
  }
  setData(temp);
  }

  return (
    <div>
      <div>
        <label>이름 : <input onChange={(e)=>{
          setName(e.target.value)
        }}></input></label><br/>
        <label>가격 : <input onChange={(e)=>{
          setPrice(e.target.value)}}></input></label>
        <button onClick={addItem}>등록하기</button>
        <button onClick={upload}>발주하기</button>
        <hr/>
      </div>
      <div>
        <ul>
          {data.map((item, index)=>{ //등록한 화면
            return <li key={index}>{item.name} : {item.price}원 [{item.count}개]</li>
          })}
        </ul>
      </div>
      <hr/>
      <div>
        {result.map((item,index)=> ( //발주 완료 화면 (2중 map)
          <ul key={index}>
          {item.map((item, index)=> (
            <li key={index}>{item.name} : {item.price}원 [{item.count}개]
            </li>
          ))}
        </ul>
        ))}
      </div>
    </div>
  );
}
export default App;
