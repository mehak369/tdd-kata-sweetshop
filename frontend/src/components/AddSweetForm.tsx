import { useState } from "react";
import { apiClient } from "../api/client";

const AddSweetForm = ({ onAdded }: { onAdded: () => void }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const submit = async () => {
    await apiClient("/sweets", {
      method: "POST",
      body: JSON.stringify({
        name,
        category,
        price: Number(price),
        quantity: Number(quantity)
      })
    });

    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");

    onAdded();
  };

 return (
  <div className="card">
    <h3>Add Sweet</h3>

    <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
    <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
    <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
    <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />

    <button onClick={submit}>Add Sweet</button>
  </div>
);
};

export default AddSweetForm;
