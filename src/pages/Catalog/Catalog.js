import { useEffect, useState } from "react";
import "./Catalog.css";
import SortSelector from "../../components/SortSelector/SortSelector";
import ItemGrid from "../../components/ItemGrid/ItemGrid";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";

export default function Catalog({
  cartItems,
  setCartItems,
  favouriteItems,
  setFavouriteItems,
}) {
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
    <div className="catalog">
      <div className="catalog-wrapper">
        <SortSelector
          setFilteredData={setFilteredData}
          setSortType={setSortType}
        />
        <ItemGrid
          filteredData={filteredData.slice(
            (currentPage - 1) * itemLimit,
            currentPage * itemLimit
          )}
          cartItems={cartItems}
          setCartItems={setCartItems}
          favouriteItems={favouriteItems}
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
