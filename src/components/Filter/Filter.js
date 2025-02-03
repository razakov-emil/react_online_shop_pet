import "./Filter.css";
import uniqueOption from "../../functions/uniqueOption";
import { useEffect, useState } from "react";
import handleFilter from "../../functions/handleFilter";
import handleSort from "../../functions/handleSort";

export default function Filter({
  sortType,
  data,
  setFilteredData,
  filters,
  setFilters,
  MAX_PRICE,
  MIN_PRICE,
}) {
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [priceUsed, setPriceUsed] = useState(false);

  useEffect(() => {
    setMinPrice(MIN_PRICE);
    setMaxPrice(MAX_PRICE);
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: MIN_PRICE,
      maxPrice: MAX_PRICE,
    }));
  }, [MIN_PRICE, MAX_PRICE]);

  const handleSubmit = () => {
    setFilteredData(
      data.filter((item) => {
        const categoryMatch = filters.category
          ? item.category.toLowerCase() === filters.category.toLowerCase()
          : true;

        const brandMatch = filters.brand ? item.brand === filters.brand : true;

        const priceMatch =
          item.price >= filters.minPrice && item.price <= filters.maxPrice;

        return categoryMatch && brandMatch && priceMatch;
      })
    );
  };

  return (
    <div className="filter-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          handleSort(sortType, setFilteredData);
        }}
      >
        <div className="form-segment category">
          <span>Категория</span>
          <select
            defaultValue="default"
            name="category"
            onChange={(e) => {
              handleFilter(e, setFilters);
            }}
          >
            <option value="default">Select category</option>
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
          <select
            name="brand"
            onChange={(e) => handleFilter(e, setFilters)}
            defaultValue="default"
          >
            <option value="default">Select brand</option>
            {uniqueOption(data, "brand").map((element, index) => {
              return <option key={index}>{element}</option>;
            })}
          </select>
        </div>
        <div className="form-segment price">
          <span>Цена</span>
          <input
            name="minPrice"
            type="number"
            value={priceUsed ? minPrice : ""}
            placeholder={"от " + minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
              setPriceUsed(true);
              handleFilter(e, setFilters);
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
            name="maxPrice"
            type="number"
            value={priceUsed ? maxPrice : ""}
            placeholder={"до " + maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
              setPriceUsed(true);
              handleFilter(e, setFilters);
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
