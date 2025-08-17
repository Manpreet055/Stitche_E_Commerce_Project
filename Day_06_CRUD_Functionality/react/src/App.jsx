import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(true);

  let fetchData = async () => {
    try {
      let response = await fetch("http://localhost:8000/get-data");
      let apiData = await response.json();
      setData(apiData.data);
      console.log(apiData.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{loading ? <div>Loading..</div> : <div>{
    data.map((item)=>(
<ul key={item._id}>
  <li>{item.name}</li>
  <li>{item.age}</li>
  <li>{item.email}</li>
</ul>
    ))}</div>}</div>;
}

export default App;
