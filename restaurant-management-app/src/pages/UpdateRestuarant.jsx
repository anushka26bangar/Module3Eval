import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const data = getRestaurants();
    const found = data.find((r) => r.restaurantID === Number(id));
    setForm(found);
  }, [id]);

  const handleUpdate = () => {
    if (!window.confirm("Are you sure you want to update?")) return;

    const data = getRestaurants().map((r) =>
      r.restaurantID === Number(id) ? form : r
    );

    saveRestaurants(data);
    alert("Updated Successfully");
    navigate("/admin/dashboard");
  };

  if (!form) return null;

  return (
    <div style={{ padding: 20 }}>
      <h2>Update Restaurant</h2>

      <input value={form.restaurantName} onChange={(e) => setForm({ ...form, restaurantName: e.target.value })} />
      <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />

      <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <select
        value={form.parkingLot.toString()}
        onChange={(e) => setForm({ ...form, parkingLot: e.target.value === "true" })}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateRestaurant;
