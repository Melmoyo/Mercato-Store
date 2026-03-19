import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
type StarRatingProps={
    rating:number;
}
const StarRating=({rating}:StarRatingProps)=>{
    const roundedRating = Math.round(rating);
    return(<>
    <div>
        {[1,2,3,4,5].map((i)=>
          <FontAwesomeIcon key ={i} icon={i<=roundedRating ? faStarSolid: faStarRegular} color={i<=roundedRating ? "#d06a4b":""} />
        )}
  
    </div>
    </>)
}
export default StarRating;