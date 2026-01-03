import { useState } from "react";
import { getRestaurants , addRestaurant, saveRestaurants } from "../utils/localStorage.js";

const AddRestuarantForm = ({ refresh }) => {
  const [form , setForm] = useState({
    {
      "restaurantID": ,
      "restaurantName": "",
      "address": "",
      "type": "",
      "parkingLot":,
      "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    }

    const handleAdd  = () =>{
      if(!form.restaurantName || !form.address || !form.type || !form.parkingLot){
        alert("Please fill all the fields");
        return;
    }

     const data = getRestaurants();
     const newRestaurant = {
      ...form,
      restaurantID: Date.now(),
      parkingLot :form.parkingLot === "true",
     };

     saveRestaurants([...data, newRestaurant]);
      alert("Restaurant added successfully");
      refresh();
      setForm({
        ...form,
        restaurantName: ""
        address: "",
      })
  });
  return (
    <div>
      <h3>Add Restaurant</h3>
      <input 
        placeholder="Restaurant Name"
        onChange={(e) => setForm({...form, restaurantName: e.target.value})}
      />
      <input 
        placeholder="Address"
        onChange={(e) => setForm({...form, address: e.target.value})}
      />
      <input 
        type="text"
        placeholder="Parking Lot (true/false)"
        value={form.parkingLot}
        onChange={(e) => setForm({...form, parkingLot: e.target.value})}
      />
    </div>
  )