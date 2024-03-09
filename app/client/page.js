'use client'
import { useState } from "react";

const Client = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className="text-7xl mb-4 font-bold">{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>
         increase
      </button>
    </div>
  );
}

export default Client