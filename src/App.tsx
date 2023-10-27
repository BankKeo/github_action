import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(import.meta.env.VITE_API_KEY);

    setData(res?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>hello</div>
      ))}
    </>
  );
}

export default App;
