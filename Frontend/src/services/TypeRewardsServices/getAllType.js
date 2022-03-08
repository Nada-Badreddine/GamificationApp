import api from "../../utils/api";

const getAllType = () => {
  const GetToken=  localStorage.getItem('TOKEN')
  return api.get("/type-rewards", {
    headers: {
      Authorization:
        'Bearer ' + GetToken,
    },
  }
  );
};

export {
    getAllType
   };