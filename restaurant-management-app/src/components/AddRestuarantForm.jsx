import { useState } from "react";
import { getRestaurants , saveRestaurants } from "../utils/localStorage.js";

const AddRestuarantForm = ({ refresh }) => {
  const [form , setForm] = useState({
      "restaurantName": "",
      "address": "",
      "type": "",
      "parkingLot": "",
      "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });

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
        restaurantName: "",
        address: "",
      });
  };


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
      <select onChange={(e) => setForm({...form, type: e.target.value})}>
        <option value ="">Select Type </option>
       <option>Rajasthani</option>
       <option>Gujarati</option>
       <option>Mughlai</option>
       <option>Jain</option>
       <option>Thai</option>
       <option>North Indian</option>
      </select>

      <select onChange={(e) => setForm({...form, parkingLot: e.target.value})}>
        <option value ="">Select Parking Lot Availability</option>
       <option value="true">Available</option>
       <option value="false">Not Available</option>
      </select>
      <button onClick={handleAdd}>Add Restaurant</button>
    </div>

  );
};

export default AddRestuarantForm;