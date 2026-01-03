import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../utils/localStorage";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");

  const refresh = () => setData(getRestaurants());

  useEffect(refresh, []);

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
      <div style={{ display: "flex" }}>
        <AddRestaurantForm refresh={refresh} />
        <div>
          {filtered.map((r) => (
            <RestaurantCard key={r.restaurantID} data={r} isAdmin refresh={refresh} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
