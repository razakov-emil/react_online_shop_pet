import "./Filter.css";
import uniqueOption from "../../functions/uniqueOption";
import { useEffect, useState } from "react";

export default function Filter({ data, filteredData, setFilteredData }) {
  const MIN_PRICE =
    data.length > 0 ? Math.min(...data.map((item) => item["price"])) : 0;
  const MAX_PRICE =
    data.length > 0 ? Math.max(...data.map((item) => item["price"])) : 0;
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [priceUsed, setPriceUsed] = useState(false);

  useEffect(() => {
    setMinPrice(MIN_PRICE);
    setMaxPrice(MAX_PRICE);
  }, [MIN_PRICE, MAX_PRICE]);

  return (
    <div className="filter-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-segment category">
          <span>Категория</span>
          <select>
            {uniqueOption(data, "category").map((element, index) => {
              return (
                <option key={index}>
                  {element[0].toUpperCase() + element.slice(1)}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-segment brand">
          <span>Бренд</span>
          <select>
            {uniqueOption(data, "brand").map((element, index) => {
              if (element !== undefined)
                return <option key={index}>{element}</option>;
            })}
          </select>
        </div>
        <div className="form-segment price">
          <span>Цена</span>
          <input
            type="number"
            value={priceUsed ? minPrice : ""}
            placeholder={"от " + minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
              setPriceUsed(true);
            }}
            onBlur={(e) => {
              let value = e.target.value ? Number(e.target.value) : minPrice;
              if (value < MIN_PRICE) {
                setMinPrice(MIN_PRICE);
              } else if (value > maxPrice) {
                setMinPrice(maxPrice);
              } else {
                setMinPrice(value);
              }
            }}
          ></input>
          <input
            type="number"
            value={priceUsed ? maxPrice : ""}
            placeholder={"до " + maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
              setPriceUsed(true);
            }}
            onBlur={(e) => {
              let value = e.target.value ? Number(e.target.value) : maxPrice;
              if (value > MAX_PRICE) {
                setMaxPrice(MAX_PRICE);
              } else if (value < minPrice) {
                setMaxPrice(minPrice);
              } else {
                setMaxPrice(value);
              }
            }}
          ></input>
        </div>

        <button className="filter-button" type="submit">
          Apply
        </button>
      </form>
    </div>
  );
}
