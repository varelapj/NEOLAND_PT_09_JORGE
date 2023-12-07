
import { GetAll } from "../services/Rickandmorty.service";

export const MapeoData = async () => {
  const RawData = await GetAll();
  return RawData.results.map((item) => ({
    name: item.name,
    image: item.image,
  }));
};

