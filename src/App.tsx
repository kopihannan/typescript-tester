import { useEffect, useState } from "react";
import Hello from "./components/Hello";

function App() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setUsers(data)
    )
  },[])

  return (
    <div>
      <Hello users={users}></Hello>

    </div>
  );
}

export default App;
