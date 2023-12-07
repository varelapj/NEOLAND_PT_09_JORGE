
    import { AxiosUtil } from "../utils/axios";


export const GetAll = async () => {
  const OptionRequest = {
    method: "GET",
    url: "https://rickandmortyapi.com/api/character",
  };

  return await AxiosUtil(OptionRequest);
};


