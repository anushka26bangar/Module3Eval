import { useNavigate } from "react-router-dom";
import { getRestaurants , saveRestaurants } from "../utils/localStorage.js";

const RestaurantCard = ({data,isAdmin, refresh}) =>{
  const navigate = useNavigate();

  const handleDelete = () =>{
    if(!window.confirm("Are you sure you wanna delete this restaurant")) return;

    const updated = getRestaurants().filter(
      (r) =>r.restauarantId !==data.restauarantId
    );

    saveRestaurants(updated);
    alert("Restuarant Deleted Successfully.");
    refresh();
  };


  return (
    <div style ={{border :"1px solid black",}}>





    </div>
  )

  
}