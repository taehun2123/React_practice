import { useState } from 'react';
import './App.css';
import {Book} from './component/Book';
function App() {
  const [title,setTitle] = useState("");
  const [text,setText] = useState("");
  const [bookList, setBookList] = useState([]);
  function addList(){
    const newData = {
      title : title,
      text : text,
    };
    setBookList([...bookList,newData]);
  }

  function removeList(id){
    const temp = [...bookList];
    temp.splice(id,1);
    setBookList(temp);
  }
  return (
    <div className="App">
      <div>
        <label>책 제목: <input onChange={(e)=>{
          setTitle(e.target.value)
        }}></input></label><br></br>
        <form>책 내용: <input onChange={(e)=>{
          setText(e.target.value)
        }}></input></form><br></br>
        <button onClick={addList}>등록하기</button>
      </div>
      <ul>
        {bookList.map((item,index)=>(
          <Book id={index} name={item.title} content={item.text}
          remove={removeList}/>
        ))}
      </ul>
    </div>
  );
}


export default App;
