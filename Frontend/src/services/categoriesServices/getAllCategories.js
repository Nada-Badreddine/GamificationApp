import api from "../../utils/api";
const GetToken=  localStorage.getItem('TOKEN')

const getAllCategories = () => {
  return api.get("/categories", {
    headers: {
      Authorization:
        'Bearer ' + GetToken,
    },
  });
};


export {
  getAllCategories
   };