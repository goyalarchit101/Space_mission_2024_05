import React, { useState } from 'react'


const UseState = () => {
      // useState hook for managing State
  const [count, setCount] = useState(10);


  // var count = 0;
  // function setCount(count) {
  //   count = count + 1;
  //   console.log(count);
  // }
  return (
    <h1>
    <div className="my-2">You clicked {count} times</div>
    <button onClick={()=> setCount(1000)}  >Click me</button>
  </h1>
  )
}

export default UseState
