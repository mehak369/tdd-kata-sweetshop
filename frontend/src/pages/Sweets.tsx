import { useEffect, useState } from "react";
import { apiClient } from "../api/client";
import AddSweetForm from "../components/AddSweetForm";

interface Sweet {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const Sweets = () => {
  const [sweets, setSweets] = useState<Sweet[]>([]);

  const loadSweets = async () => {
    const data = await apiClient("/sweets");
    setSweets(data || []);
  };

  useEffect(() => {
    loadSweets();
  }, []);

  return (
  <div className="container">
    <h2>Sweets</h2>

    <AddSweetForm onAdded={loadSweets} />

    {sweets.length === 0 && (
      <p className="empty">No sweets available</p>
    )}

    <ul>
      {sweets.map(s => (
        <li key={s.id}>
          <span>{s.name}</span>
          <span>₹{s.price} · {s.quantity} left</span>
        </li>
      ))}
    </ul>
  </div>
);
};

export default Sweets;
