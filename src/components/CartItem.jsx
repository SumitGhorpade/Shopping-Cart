import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';
const CartItem = ({item,itemIndex}) => {
 
  const dispatch = useDispatch();
  const removeFromCart = ()=>{
     dispatch(remove(item.id));
     toast.success("Item removed from card")
  }
  return(
    <div className=' border-b-2 border-blue-800 '>
      <div className='flex justify-center items-center space-x-8 mb-5 mt-4 ' >
      <div className="h-[200px] max-h-[200px]">
        <img src={item.image} className='w-full h-full'  />
      </div>
      <div>
        <h1 className="text-gray-700 font-semibold text-xl text-left truncate w-40 mb-1">
          {item.title}</h1>
        <h1 className="w-40 text-gray-400 font-normal text-[15px] text-left mb-1">
          {item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
        <div className="flex justify-between gap-12 items-center w-full mt-5 ">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div
          onClick={removeFromCart} 
          >
            <MdDelete className=' text-red-500 bg-red-300 p-1 w-6 h-6 rounded-full '/>
          </div>
        </div>
        
      </div>
      
      </div>
       
    </div>
    
  );
};

export default CartItem;
