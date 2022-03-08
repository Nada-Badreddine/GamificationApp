import api from "../../utils/api";

const getAllGifts = () => {
  const GetToken=  localStorage.getItem('TOKEN')
  return api.get("/gifts", {
    headers: {
      Authorization:
        'Bearer ' + GetToken,
    },
  }
  );
};

export {
   getAllGifts
   };