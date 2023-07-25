import { useState } from 'react';
import {App} from '../App'
export function PlusList(props){
  return(
    <>
    <h2>책 요청</h2>
    <label>제목 : <input value={props.name} onChange={(e)=>{props.setName(e.target.value)}}/></label><br/>
    <label>내용 : <input value={props.content} onChange={(e)=>{props.setContent(e.target.value)}}/></label><br/>
    <button onClick={()=>{props.addList()}}>요청하기</button>
    </>
  )
}