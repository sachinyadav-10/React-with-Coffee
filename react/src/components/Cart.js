import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart =()=>{

    const cartItems =useSelector((store)=>store.cart.items)
    console.log(cartItems);
    
    const dispatch =useDispatch();

    const handelClearcart = ()=>{
        dispatch(clearCart());
    }
    return (
        <div className="flex flex-col text-center" >  
            <h1 className="text-center text-3xl m-4 p-4 font-bold">Cart</h1>
            <button 
            className=" p-2 m-2 max-w-28 bg-blue-400 rounded-3xl"
            onClick={handelClearcart}
            >Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is Empty add items to it </h1>}
            <div className="flex justify-center">
            <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;