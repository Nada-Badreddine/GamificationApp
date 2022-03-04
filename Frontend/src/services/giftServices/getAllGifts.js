import api from "../../utils/api";

const getAllGifts = () => {
  return api.get("/cadeaux");
};


export {
   getAllGifts
   };