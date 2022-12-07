import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div className="bg-red-500">{data}</div>;
}
