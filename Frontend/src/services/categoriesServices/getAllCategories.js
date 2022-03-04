import api from "../../utils/api";

const getAllCategories = () => {
  return api.get("/category-tables");
};


export {
  getAllCategories
   };