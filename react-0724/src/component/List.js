import App from '../App'
export function List(props){
  return (
    <>
    <h2>책 리스트</h2>
    <ul>
      { props.bookList.map((item)=>{
        return <li>제목 : {item.name} 내용 : {item.content}</li>
      })}
    </ul>
    <button onClick={()=>{props.bookRequest()}}>데이터 요청하기</button>
    </>
  )
}