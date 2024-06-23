// import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";

// const Cart=()=>{

//     const cartItems=useSelector((store)=>store.cart.items);

//     const dispatch=useDispatch();
//     const handleClearCart=()=>{
//         dispatch(clearCart());    
//     };

//     return (
//     <div className="text-center m-4 p-4">
//     <h1 className="text-2xl font-bold">Cart</h1>
//     <div className="w-6/12 m-auto ">
//         <button className="p-2 m-2 bg-black text-white rounded-lg"
//         onClick={handleClearCart}>Clear Cart 
        
//         </button>
//         {cartItems.length===0 && <h1>Cart is empty.
//             Add Items to the cart!
//         </h1>}
//         <ItemList items={cartItems}/>
//     </div>

//     </div>
//     );
// };

// export default Cart;

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.card.info.price/100, 0);

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto ">
                <button 
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && (
                    <h1>
                        Cart is empty. Add Items to the cart!
                    </h1>
                )}
                <ItemList items={cartItems} />
                {cartItems.length > 0 && (
                    <div className="mt-4">
                        <h2 className="text-xl">Total Price: Rs.{totalPrice.toFixed(2)}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
