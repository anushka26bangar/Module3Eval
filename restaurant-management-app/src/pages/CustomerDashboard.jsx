import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../utils/localStorage";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getRestaurants());
  }, []);

  return (
    <div>
      {data.map((r) => (
        <RestaurantCard key={r.restaurantID} data={r} />
      ))}
    </div>
  );
};

export default CustomerDashboard;
