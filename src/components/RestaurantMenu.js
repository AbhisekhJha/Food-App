import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{

    // const [resInfo,setResInfo]=useState(null);

    const{resId}=useParams();
    //console.log(resId)
    const resInfo=useRestaurantMenu(resId);

    const[showIndex,setShowIndex]=useState(null);


// useEffect(()=>{
    
//  fetchMenu();

// }, []);

// const fetchMenu=async ()=>{
//     const data= await fetch(MENU_API+resId);
//     const json=await data.json();
//    // console.log(json);

//     setResInfo(json.data)
// };

if(resInfo===null) return <Shimmer/>

const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info ;

const{itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
//console.log(itemCards);
//console.log("hiiii",resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

const categories=
resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
(c)=>
c.card?.card?.["@type"] ===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
//console.log(categories);

    return(
        <div className="text-center ">
           <h1 className="font-bold my-6 text-2xl">{name}</h1>
           <p className="font-bold text-xl">{cuisines?.join(", ")}-{costForTwoMessage}</p>
            {categories.map((category,index)=>(
                <RestaurantCategory 
                key={category?.card?.card?.title} 
                data={category?.card?.card}
                showItems={index===showIndex?true:false}
                setShowIndex={()=>setShowIndex(index)}
                
                
                />
                
            ))}

        </div>
    );
};

export default RestaurantMenu;

//"https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=337335&isMenuUx4=true&submitAction=ENTER"