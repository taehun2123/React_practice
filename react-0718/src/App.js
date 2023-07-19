import {Book} from './component/Book'
import './App.css';
import { useState } from 'react';

function App() {
  const [bookList, setBookLIst] = useState([
    {
      name : "책 1",
      content : "책 임"
    },
    {
      name : "책 2",
      content : "책 B"
    },
  ]);
  const [inputName,setInputname] = useState("");
  const [inputContent,setInputContent] = useState("");
  const [bookIndex, setBookIndex] = useState(null);

  function addBook() {
    setBookLIst([...bookList, {name:inputName, content : inputContent}]);
    setInputname("");
    setInputContent("");
    setBookIndex(null);
  }
  function removeBook(index) {
    const arr = [...bookList];
    arr.splice(index, 1);
    setBookLIst(arr);
  }
  function selectedBook(index) {
    setInputname(bookList[index].name);
    setInputContent(bookList[index].content);
    setBookIndex(index);
  }
  function changeBook(){
    bookList[bookIndex].name = inputName;
    bookList[bookIndex].content = inputContent;
    setBookIndex(null);
    setInputname("");
    setInputContent("");
  }
  function resetBook(){
    setBookIndex(null);
    setInputname("");
    setInputContent("");
  }
  return (
    <div className="App">
      <h2>책 {bookIndex !== null ? "수정" : "등록"}</h2>
      <label> 책 제목 : 
        <input value={inputName} onChange={(e)=>{setInputname(e.target.value)}}>
        </input>
      </label>
      <br/>
      <label> 책 내용 : 
      <input value={inputContent} onChange={(e)=>{setInputContent(e.target.value)}}>
        </input>
      </label>
      <button onClick={bookIndex !== null ? changeBook : addBook}>{bookIndex !== null ? "수정" : "등록"}</button>
      <button onClick={resetBook}>초기화</button>
      <h2>
        책 리스트
      </h2>
      <ul>
        {
          bookList ? (bookList.map((book, index)=>{
            return <Book id={index} name={book.name} content={book.content} removeFunc={removeBook} selectedBook={selectedBook}/>
          }))
          : "책이 없습니다..."
        }
      </ul>
    </div>
  );
}

export default App;
