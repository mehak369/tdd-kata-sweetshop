import { Sweet } from "./sweets.model";

export const getAllSweets = async () => {
  return await Sweet.find();
};

export const addSweet = async (
  name: string,
  category: string,
  price: number,
  quantity: number
) => {
  const sweet = await Sweet.create({
    name,
    category,
    price,
    quantity
  });

  return {
    id: sweet._id.toString(),
    name: sweet.name,
    category: sweet.category,
    price: sweet.price,
    quantity: sweet.quantity
  };
};
