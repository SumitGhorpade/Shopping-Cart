import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  const clickHandler =()=>{
    toast.success("Checked out successfully")
  }
  return (
    <div >
      {
        cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row mx-auto lg:ml-60 mt-5  space-x-52 ">
            <div className="grid grid-cols-1">
            {
              cart.map((item,index)=>(
                <CartItem key={item.id} item={item} itemIndex={index} 
                />
              ))
            }
            </div>
            <div className="flex h-[90vh] flex-col  lg:justify-between mb-20 mt-5 ">
            <div >
              <div className="text-xl font-semibold text-green-900 uppercase mb-2">Your Cart :</div>
              <div className="text-3xl font-bold text-green-600 uppercase mb-9">Summary</div>
              <p>
                <span className=" text-base font-semibold text-green-900 uppercase mb-2">
                  Total Items : {cart.length}</span>
              </p>
            </div>
            <div className=" text-xl font-semibold text-green-900 uppercase ">
              <p>
                Total Amount : {totalAmount}
              </p>
              <div className="bg-green-600 text-lg text-white uppercase rounded-md py-1 px-1  lg:py-2 lg:px-3 
              flex items-center justify-center mt-2 hover:bg-green-800">
              <button
              onClick={clickHandler}
              >Checkout Now</button>
            </div>
            </div>
            
            </div>
          </div>
        )
        :
        (
          <div className="flex h-screen flex-col  uppercase items-center justify-center ">
            <p className="text-xl font-semibold text-slate-900">Cart Empty</p>
            <Link to="/">
              <button className="text-lg bg-green-600 hover:bg-green-800  text-white font-semibold
              mt-2 lg:py-1 lg:px-2 rounded-md">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
