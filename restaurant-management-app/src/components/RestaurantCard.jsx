import { useNavigate } from "react-router-dom";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

const RestaurantCard = ({ data, isAdmin, refresh }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    const updated = getRestaurants().filter(
      (r) => r.restaurantID !== data.restaurantID
    );

    saveRestaurants(updated);
    alert("Deleted Successfully");
    refresh && refresh();
  };

  return (
    <div style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
      <img src={data.image} width="200" />
      <h4>{data.restaurantName}</h4>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>

      {isAdmin && (
        <>
          <button onClick={() => navigate(`/admin/restaurants/update/${data.restaurantID}`)}>
            Update
          </button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default RestaurantCard;
