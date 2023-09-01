import {HiShoppingCart} from "react-icons/hi"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {cart} = useSelector((state)=>state)
  return(
    
  <div >
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
     <NavLink to="/">
       <div className="ml-5">
       <img src=" logo.png" alt=""  className="h-14"/>
       </div>
     </NavLink>

      <div className="flex gap-x-8 font-medium text-lg text-white items-center ">
      <NavLink to="/">
      <p className="hover:text-green-300">Home</p>
      </NavLink>
      <NavLink to="/cart">
        <div className="hover:text-green-300 relative">
        <HiShoppingCart className="text-xl"/>
        {
          cart.length >0 && 
          <span className="absolute -right-2 -top-3 text-sm bg-green-600 w-5 h-5 flex items-center justify-center rounded-full animate-bounce ">{cart.length}</span>
        }
        </div>
      </NavLink>
      
      </div>
      </div>
    </div>
  )
};

export default Navbar;
