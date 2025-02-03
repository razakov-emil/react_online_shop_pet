import "./SortSelector.css";
import handleSort from "../../functions/handleSort";

export default function SortSelector({ setFilteredData, setSortType }) {
  return (
    <div className="sort-container">
      <span className="sort-span">Sort by</span>
      <select
        className="sort-selector"
        onChange={(e) => {
          handleSort(e.target.value, setFilteredData);
          setSortType(e.target.value);
        }}
      >
        <option value="title">Name</option>
        <option value="price">Cost</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
