import React,{useState} from 'react';
function NameCount(){
  const[count,setCount]=useState(0);

  

return(
  
  <div>
  <p>click me{count}</p>
<button onClick={()=>(setCount+1)}>
  click me update</button>
</div>
)
}