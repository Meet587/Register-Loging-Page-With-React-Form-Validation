import { useEffect, useState } from "react";
import axios from "axios";
const Index2 = () => {
  const [data, setData] = useState()
document.title="Meet Rakholiya"

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data));
  },[]);
  console.log(data);
  return <div>hello from index 2</div>;
};

export default Index2;
