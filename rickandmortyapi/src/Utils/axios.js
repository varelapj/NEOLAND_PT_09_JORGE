import axios  from "axios";

export const AxiosUtil =  async (options) => {
return await axios.request(options).then((res) => res.data);
}
