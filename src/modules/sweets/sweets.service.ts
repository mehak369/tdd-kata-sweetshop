import { Sweet } from "./sweets.model";

export const getAllSweets = async () => {
  return await Sweet.find();
};
