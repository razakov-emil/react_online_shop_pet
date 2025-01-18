import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";
import "./ItemGrid.css";

export default function ItemGrid({ addToCart }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?albumId=1"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Ошибка при получении данных", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="item-grid">
      {data.map((item) => (
        <ItemCard
          key={item.id}
          source={item.thumbnailUrl}
          itemName={item.title}
          itemCost={500}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
