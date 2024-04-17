import { CDN_URL } from "../utils/constants";

const RestaurantCard=({resData})=>{
 // console.log("Res Data",resData?.info);


    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla

    }=resData?.info;
   let  price = costForTwo.split(" ")[0];
    price = Number(price.replace(/[^0-9\.-]+/g,""));
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img src={ CDN_URL +
          cloudinaryImageId}
              className="rounded-lg" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>Rs.{price} for two</h3>
            <h3>{sla.deliveryTime} minutes</h3>
            
            
        </div>
    )

  

            }

         export const withPromotedLabel=(RestaurantCard)=>{
                return (props)=>{
                    return (
                        <div>
                            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                            <RestaurantCard {...props}/>
                        </div>
                    )
                }
            }

export default RestaurantCard;