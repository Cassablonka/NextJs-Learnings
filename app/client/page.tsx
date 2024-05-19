'use client'
import { useState } from "react";

export default function Client() {
  const [count, setCount] = useState(0)
  console.log('I am re rendered', count);
  
  return (
    <>
    <h1 className="font-bold text-7xl mb-10">{count}</h1>
    <button onClick={() => setCount(count+1)} className="btn btn-primary">Increase</button>
    </>
  );
}
