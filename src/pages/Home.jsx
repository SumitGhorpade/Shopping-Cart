import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { data } from "autoprefixer";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loading,setLoading]=useState(true);
  const [posts,setPosts] = useState([])
  const [filter,setFilter]=useState('');

  async function fetchData(){
    setLoading(true);
    try{
     const result = await fetch(API_URL);
     
     setPosts(await result.clone().json()); 
     setFilter(await result.json());
    }
    catch(error){
      alert("something went wrong");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  const filterProduct =(cat)=>{
     const updatedList = posts.filter((card)=> card.category === cat);
     setFilter(updatedList);
  }
  return (
    <div className="flex flex-col justify-center items-center ">
       <div className="lg:flex justify-center items-center space-x-6 px-4 py-1 text-lg mt-2 ">
        <button onClick={()=>setFilter(posts)}
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in">All</button>
        <button onClick={()=>filterProduct("men's clothing")}
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
        >Men's Clothing</button>
        <button onClick={()=>filterProduct("women's clothing")}
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
        >Women's  Clothing</button>
        <button onClick={()=>filterProduct("jewelery")}
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
        >Jewelery</button>
        <button onClick={()=>filterProduct("electronics")}
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
        >Electronics</button>
        
      </div>
      {

        loading ? (<Spinner/>) :(
          filter.length > 0 ? (
            <div className="grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-10 max-w-6xl mx-auto space-x-5">
              {
                filter.map((post)=>(
                  <Product key={post.id}  post={post} />
                ))
              }
            </div>
          ):(
            <div className="flex justify-center items-center text-2xl font-bold"> 
            <p>No Data Found</p>
            </div>
          )
        )
      }
    </div>
  );
};

export default Home;
