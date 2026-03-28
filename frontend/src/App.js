import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/data")
    .then(res => res.json())
    .then(data => setData(data.message));
  }, []);
  return (
    <div> 
      <h1> Frontend + Backend Connected </h1>
      <p>{data}</p>
    </div>
  );
}

export default App;