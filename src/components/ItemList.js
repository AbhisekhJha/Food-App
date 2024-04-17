import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
    //console.log(items)
    const dispatch=useDispatch();
    const [notification, setNotification] = useState(null);
    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item));
        
        setNotification(`${item.card.info.name} added to cart!`);
        // clear notification after 3 seconds
        setTimeout(() => {
            setNotification(null);
        }, 2000);

    }

    return (
    <div> 
        
     {notification && (
                <div className="fixed top-0 left-0 w-full bg-yellow-100 text-black p-3 z-50 shadow-md  border-b-4 border-green-400">

                    {notification}
                </div>
            )}
            
            {items.map((item)=>(
             <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"> 
          
           <div className="9/12"> 
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>-Rs.{item.card.info.price?item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4 ">
                    <div className="absolute">
                <button className="p-2 mx-16 rounded-lg bg-white shadow-lg "
                onClick={()=>handleAddItem(item)}
                
                >
                    Add +
                    </button>
                </div>
                <img 
                src={CDN_URL+item.card.info.imageId} className="w-full"/>
                </div>
            </div>
            ))}
       
    </div>
    );
};

export default ItemList