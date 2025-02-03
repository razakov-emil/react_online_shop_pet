import ItemGrid from "../ItemGrid/ItemGrid";
import Filter from "../Filter/Filter";
import "./Main.css";
import { useEffect, useState } from "react";
import SortSelector from "../SortSelector/SortSelector";

export default function Main({ setCartItems, setFavouriteItems }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const MIN_PRICE =
    data.length > 0 ? Math.min(...data.map((item) => item["price"])) : 0;
  const MAX_PRICE =
    data.length > 0 ? Math.max(...data.map((item) => item["price"])) : 0;
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    minPrice: MIN_PRICE,
    maxPrice: MAX_PRICE,
  });
  const [sortType, setSortType] = useState("");

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
        <SortSelector
          setFilteredData={setFilteredData}
          setSortType={setSortType}
        />
        <ItemGrid
          filteredData={filteredData}
          setCartItems={setCartItems}
          setFavouriteItems={setFavouriteItems}
        />
      </div>
      <Filter
        sortType={sortType}
        data={data}
        setFilteredData={setFilteredData}
        filters={filters}
        setFilters={setFilters}
        MAX_PRICE={MAX_PRICE}
        MIN_PRICE={MIN_PRICE}
      />
    </div>
  );
}
