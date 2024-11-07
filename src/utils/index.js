import { toast } from "react-toastify";

const getAllSavedData = (value) => {
  const all = localStorage.getItem(value);

  if (all) {
    const data = JSON.parse(all);
    // console.log(data);
    return data;
  } else {
    // console.log([]);
    return [];
  }
};

//     const wish =[2,3,4,5]
const addToLocalStorage = (data, arrayName) => {
  // get all previously saved  data
  const allSavedData = getAllSavedData(arrayName);
  const isExist = allSavedData.find(
    (item) => item.product_id == data.product_id
  );
  if (isExist) {
    toast.error("Data already exists!");
    return;
  }

  allSavedData.push(data);
  localStorage.setItem(arrayName, JSON.stringify(allSavedData));
  toast.success("Successfully added!");
};
const removeFromLcalStorage = (data, id) => {
  const allSavedData = getAllSavedData(data);
  const filterData = allSavedData.filter((dat) => dat.product_id !== id);
  localStorage.setItem(data, JSON.stringify(filterData));
  toast(`${data} Removed successfully`);
};
export { getAllSavedData, addToLocalStorage, removeFromLcalStorage };
