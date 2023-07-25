import logo from './logo.svg';
import {List} from './component/List'
import { PlusList } from './component/PlusList';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [bookList, setBookList] = useState([]);
  const [name,setName] = useState("");
  const [content,setContent] = useState("");
  useEffect(()=>{
    bookRequest();
  }, [])
  function bookRequest() {
    fetch(`http://localhost:5050/book`)
    .then(res=>res.json())
    .then(data => {
      setBookList(data)
    })
  }
  async function addList(){
    const data = {name : name, content : content}
    const response = await fetch(`http://localhost:5050/bookinsert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    setName("");
    setContent("");
    alert("성공적으로 요청하였습니다.");
    }
  return (
    <div className="App">
      <List bookList={bookList} bookRequest={bookRequest}/>
      <PlusList name={name} content={content} setName={setName} setContent={setContent} addList={addList}/>
    </div>
  );
}

export default App;
