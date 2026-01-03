import { useEffect, useState } from "react";
import AddRestaurantForm from "../components/AddRestuarantForm";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../utils/localStorage";

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  const refresh = () => setData(getRestaurants());

  useEffect(refresh , []);

  return (
    <div style={{display:"flex"}}>
      <AddRestaurantForm refresh ={refresh} />
      <div>
        {data.map((r) => (
          <RestaurantCard key={r.restaurantID} data={r} isAdmin refresh={refresh} />
        ))}
      </div>

    </div>
  )
}

export default AdminDashboard;
