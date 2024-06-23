import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus";
 

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(" ");

    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

    
//whenever state variable update,react triggers ar reconciliation cycle(re-renders the component)
   // console.log(listOfRestaurants)

    // async function fetchData() {
    //     try {
    //         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    //         const json = await data.json();


    //       //  console.log(json)
    //         let restaurants;
    //         for (const card of json.data.cards) {
    //             if (card.card?.card?.gridElements?.infoWithStyle?.restaurants) {
    //                 restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
    //                 break;
    //             }
    //         }

    //         if (restaurants) {
    //             setListOfRestaurant(restaurants);
    //             setFilteredRestaurants(restaurants);
    //         } else {
    //             console.error("Restaurant data not found in the response");
    //         }
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    //}

    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json)

        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants);
        //console.log(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

    
    
    useEffect(() => {
        fetchData();
    }, []);


    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
    return(
        <h1>Looks like you're offline!! Please check your internet connection!</h1>
        );


    return listOfRestaurants.length===0 ?(<Shimmer/>):(
        
                <div className="body">
                    <div className="filter flex">
                        <div className="search m-4 p-4">
                            <input 
                            type="text" 
                            className="border border-solid border-black" 
                            value={searchText} 
                            onChange={(e)=>{
                                setSearchText(e.target.value);
                            }}
                            />
                            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
    // Filter the restaurant cards and update the UI
                        const filteredRestaurant = listOfRestaurants.filter(res =>
                            res.info.name.toLowerCase().includes(searchText.trim().toLowerCase()) ||
                            res.info.name.split(' ').pop().toLowerCase().includes(searchText.trim().toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                        </div>
                        <div className="search m-4 p-4 flex item-center">
                        <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                            const filteredList = listOfRestaurants.filter(res => res?.info?.avgRating > 4.5);
                            setFilteredRestaurants(filteredList);
                        }}>
                            Top Rated Restaurants
                        </button>
                        </div>
                    </div> 
               
                    <div className="flex flex-wrap">
                        {filteredRestaurants.map(restaurant => (
                           <Link 
                           key={restaurant.info?.id} 
                           to={"/restaurant/"+restaurant.info.id}>

                           { restaurant.info.promoted?(
                            <RestaurantCardPromoted resData={restaurant} />
                           ):(
                            <RestaurantCard resData={restaurant} />
                           )
                           
                           }
                            </Link> 

                        ))}
                    </div>
                </div>
            ) 
            };
       


export default Body;




