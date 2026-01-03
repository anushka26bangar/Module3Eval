import { useNavigate } from "react-router-dom";
import { getRestaurants, saveRestaurants } from "../utils/localStorage.js";

const RestaurantCard = ({ data, isAdmin, refresh }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm("Are you sure you wanna delete this restaurant"))
      return;

    const updated = getRestaurants().filter(
      (r) => r.restauarantId !== data.restauarantId
    );

    saveRestaurants(updated);
    alert("Restuarant Deleted Successfully.");
    refresh();
  };

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "0px" }}>
      ;
      <img
        src={data.image}
        alt={data.restaurantName}
        width="100%"
        height="200px"
      />
      <h3>{data.restaurantName}</h3>
      <p>Address : {data.address}</p>
      <p>Type : {data.type}</p>
      <p>Parking Lot : {data.parkingLot ? "Yes" : "No"}</p>
      {isAdmin && (
        <div>
          <button
            onClick={() =>
              navigate(`/admin/restaurants/update/${data.restaurantID}`)
            }
          >
            Update
          </button>

          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;