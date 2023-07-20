import {App} from '../App'
export function Book (props) {
  return(
    <li>
      {props.name} {props.content} <button onClick={()=>(props.removeFunc(props.id))}>삭제</button><button onClick={
        ()=>{props.selectedBook(props.id)}}>수정</button><button onClick={()=>{props.ttabong(props.id)}}>따봉 {props.thumb}</button></li>
  )
}