import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../utils/localStorage";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");

  useEffect(() => {
    setData(getRestaurants());
  }, []);

  const filtered = data.filter((r) => {
    return (
      (!type || r.type === type) &&
      (!parking || r.parkingLot.toString() === parking) &&
      (r.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
        r.address.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <>
      <Navbar setSearch={setSearch} setType={setType} setParking={setParking} />
      {filtered.map((r) => (
        <RestaurantCard key={r.restaurantID} data={r} />
      ))}
    </>
  );
};

export default CustomerDashboard;
