import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  function sayHello() {
    console.log("hello");
    setCount(count + 1);
  }

  return (
    <>
    <div>說{count}次hello</div>
    <button onClick={() => setCount(count + 1)}>說一次hello</button>
    </>
  );
}