import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  /* const [products,error,loading]=Customreactquerry('/api/products') */ //custom react querry
  const [products, setProducts] = useState([]);
  const [error, seterror] = useState(false);                   /* To handle error */
  const [loading, setloading] = useState(false);              /* To handle loading */
 const [Search,setSearch]=useState("")
  useEffect(() => {
    const controller=  new AbortController()
    ;(async () => {
      try {                                   /* Using the try catch syntax so that we can handle the api safely */
        setloading(true);
        seterror(false);
        const response = await axios.get("/api/products?search="+Search,{
           Signal:controller.Signal
        });
        console.log(response.data);
        setProducts(response.data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }

      return ()=>{
        controller.abort()
      }
    })();
  }, [Search]);
  /*  if (error) {
    return (
      <h1>Something went wrong</h1>
    ); 
     }
  if (loading) {
    return <h1>Loading....</h1>;
  } */
  return (
    <>
      <h1>Api in React</h1>
      <input type="text"  placeholder="search" 
      value={Search}
      onChange={(e)=>setSearch(e.target.value)}/>
       {loading && (<h1>Loading....</h1>)}           
      {error && (<h1>Something went wrong</h1>)}{" "}
      {/* Other ways to handle the error without using the if else syntax */}
      <h2>Number of products are : {products.length}</h2>
    </>
  );
}

export default App;

/* const Customreactquerry=(urlpath)=>{
  const [products, setProducts] = useState([])
  const [error,seterror]=useState(false)
  const [loading,setloading]=useState(false)

  useEffect(()=>{
    (async()=>{
     try {
      setloading(true)
      seterror(false)
       const response= await axios.get(urlpath)
     console.log(response.data)
     setProducts(response.data)
     setloading(false)
     } catch (error) {
      seterror(true)
      setloading(false)
     }
    })()
  },[urlpath])

  return [products,error,loading]
} */

/* The custom react query is a generic function which is made to handle the 
api call in this we take parameter as teh pathname and just call the function 
inside the main function and pssing the path as parameter */
