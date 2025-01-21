import ItemGrid from "../ItemGrid/ItemGrid";
import Filter from "../Filter/Filter";
import { useEffect, useState } from "react";

export default function Main({ setCartItems }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        setData(json.products);
        console.log(json.products);
      } catch (error) {
        console.error("Ошибка при получении данных", error);
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="main">
      <ItemGrid data={data} setCartItems={setCartItems} />
      <Filter setData={setData} />
    </div>
  );
}
