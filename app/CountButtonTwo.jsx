'use client';
import { useState, useEffect } from "react";

export default function CountButtonTwo(){
  let [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 2)
  }

  function rollOverCount(){
    if (count > 10){
      setCount(0)
    }
  }

  useEffect(rollOverCount, [count])
  return (
    <div>
      <button onClick={handleClick}>+2</button>
      <div>{count}</div>
    </div>
  )
}