import ItemGrid from "../ItemGrid/ItemGrid";
import Filter from "../Filter/Filter";
import "./Main.css";
import { useEffect, useState } from "react";
import SortSelector from "../SortSelector/SortSelector";

export default function Main({ setCartItems }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        setData(json.products);
        setFilteredData(json.products);
      } catch (error) {
        console.error("Ошибка при получении данных", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="main">
      <div className="main-wrapper">
        <SortSelector setFilteredData={setFilteredData} />
        <ItemGrid data={filteredData} setCartItems={setCartItems} />
      </div>

      <Filter data={data} setFilteredData={setFilteredData} />
    </div>
  );
}
