import './App.css';
import { useState } from 'react';

function App() {
  const data = [
    {
      id : 1,
      name : "코카콜라",
      cnt : 1,
      price : 2000
    },
    {
      id : 2,
      name: "칠성사이다",
      cnt : 1,
      price : 2000
    },
    {
      id : 3,
      name: "테라",
      cnt : 1,
      price : 2000
      },
    {
      id : 4,
      name: "진로",
      cnt : 1,
      price : 2000
      }
  ]
  const [order, setOrder] = useState([]);
  const [list,setList] = useState([]);
  
  function addList(objectname) { //개수 추가하기
    const temp = [...list];
    const includeItem = temp.find(item => item.name === objectname); //list 배열 안에서 중복 찾기

    if (includeItem) { //만약 중복이면
      const index = temp.findIndex(item => item.name === objectname); //배열 개수를 찾아
      temp[index].cnt += 1; //배열 내부의 cnt를 +1 해준다.
    } else { //중복이 아니면
      const newItem = { ...data.find(obj => obj.name === objectname) }; //data 배열 안에서 name이 같은 객체를 찾고
      newItem.cnt = 1; //해당 객체의 cnt를 1로 설정한다.
      temp.push(newItem); //설정된 변수를 temp에 푸시
    }

    setList(temp); //리스트 수정완료
  }

  const reset = () => { //주문하기 버튼
    setOrder(prevData => [...prevData, [...list]]); //Order에 저장, 이전 데이터 배열에 추가된 data 배열을 삽입
    setList([]); //list 초기화
  }

  return (
    <div>
      <div>
        <h1>Drink Kiosk</h1>
      </div>
      <hr/>
      <div>
        <p>주문하실 제품을 선택하세요.</p>
        {data.map((item)=>{
          return <button onClick={()=>{
            addList(item.name)
          }}>{item.name}</button>
        })}
        <br/><br/>
        <button onClick={()=>(reset())}>주문하기</button>
        <hr/>
      </div>
      <ul>
        {list.map((item, id)=>{
          return <li key={id}>{item.name} * {item.cnt}</li>
        })}
      </ul>
      <hr/>
      <h2>주문 리스트</h2>
      <hr/>
        {order.map((item, index)=>{
          return <ol key={index}>
            {item.map((item, itemindex) => (
              <li key={itemindex}>{item.name} * {item.cnt}</li>
            ))}
          </ol>
        })}
    </div>
  );
}

export default App;