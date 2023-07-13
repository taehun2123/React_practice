import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(""); //State 변수 선언
  const [price,setPrice] = useState("");
  const [data,setData] = useState([]);
  const [result,setResult] = useState([]);

  function upload(){ //발주하기 함수
    setResult((prevResult) => [...prevResult, [...data]]); // 2차원 배열 구성 - data배열에 새로 업로드 한 배열을 추가
    setData([]); //data배열 초기화
  }

  function addItem(){ //등록하기 함수
    const temp = [...data]; //얕은 복사
    const isInclude = temp.find((item)=>(item.name === name)); //temp배열 안 이름이 중복유무 찾기
    if(isInclude){ //중복이라면?
      const index = temp.findIndex((item)=>(item.name === name)); //temp배열의 해당 중복 인덱스를 찾는다(배열계수)
      temp[index].count += 1; //중복된 객체의 count 값을 1 추가한다.
    } else { //중복이 아니라면?
    temp.push({ //temp배열에 해당 객체를 삽입한다.
      name : name,
      price : price,
      count : 1,
      })
  }
  setData(temp); //data배열을 복사하여 수정한 temp값으로 수정한다
  }

  return (
    <div>
      <div>
        <h2>Drink Kiost [Management]</h2>
        <label>이름 : <input onChange={(e)=>{
          setName(e.target.value)
        }}></input></label><br/>
        <label>가격 : <input onChange={(e)=>{
          setPrice(e.target.value)}}></input></label>
        <br/><br/> 
        <button onClick={addItem}>등록하기</button>
        <button onClick={upload}>발주하기</button>
        <hr/>
      </div>
      <div>
        <h3>발주한 상품</h3>
        <ul>
          {data.map((item, index)=>{ //등록한 화면
            return <li key={index}>{item.name} : {item.price}원 [{item.count}개]</li>
          })}
        </ul>
      </div>
      <hr/>
      <div>
      <h3>발주 완료된 상품</h3>
      <hr/>
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
