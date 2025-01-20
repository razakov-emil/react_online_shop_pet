import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";
import "./ItemGrid.css";

export default function ItemGrid({ setCartItems }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        console.log(json);
        setData(json.products);
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
          id={item.id}
          source={item.images}
          itemName={item.title}
          itemCost={item.price}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}
