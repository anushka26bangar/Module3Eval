export const  getRestaurants = () =>{
  JSON.parse(localStorage.getItem("evailData")) || [];
};

export const  saveRestaurants = (data) =>{

  localStorage.setItem("evailData",JSON.stringify(data));
};

