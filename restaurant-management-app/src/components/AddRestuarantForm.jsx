import { useState } from "react";

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

  });