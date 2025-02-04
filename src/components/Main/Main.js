import { useEffect, useState } from "react";
import "./Main.css";
import SortSelector from "../SortSelector/SortSelector";
import ItemGrid from "../ItemGrid/ItemGrid";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";

export default function Main({ setCartItems, setFavouriteItems }) {
  const itemLimit = 24;
  const [currentPage, setCurrentPage] = useState(1);
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
        const response = await fetch(`https://dummyjson.com/products/?limit=0`);
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
          filteredData={filteredData.slice(
            (currentPage - 1) * itemLimit,
            currentPage * itemLimit
          )}
          setCartItems={setCartItems}
          setFavouriteItems={setFavouriteItems}
        />
        <Pagination
          pages={Math.ceil(
            filteredData.length > 0
              ? Math.ceil(filteredData.length / itemLimit)
              : 1
          )}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
