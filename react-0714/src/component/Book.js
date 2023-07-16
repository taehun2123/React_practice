export function Book(props){
  return (
  <li key={props.id}>
    <h3>{props.name}</h3>
    <p>{props.content}</p>
    <button onClick={props.remove}>X</button>
  </li>
  )
}