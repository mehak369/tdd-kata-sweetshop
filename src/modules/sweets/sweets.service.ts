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

export const purchaseSweet = async (id: string) => {
  const sweet = await Sweet.findById(id);

  if (!sweet) {
    throw new Error("Sweet not found");
  }

  if (sweet.quantity <= 0) {
    throw new Error("Out of stock");
  }

  sweet.quantity -= 1;
  await sweet.save();

  return {
    id: sweet._id.toString(),
    name: sweet.name,
    category: sweet.category,
    price: sweet.price,
    quantity: sweet.quantity
  };
};
export const restockSweet = async (id: string, quantity: number) => {
  const sweet = await Sweet.findById(id);

  if (!sweet) {
    throw new Error("Sweet not found");
  }

  sweet.quantity += quantity;
  await sweet.save();

  return {
    id: sweet._id.toString(),
    name: sweet.name,
    category: sweet.category,
    price: sweet.price,
    quantity: sweet.quantity
  };
};

