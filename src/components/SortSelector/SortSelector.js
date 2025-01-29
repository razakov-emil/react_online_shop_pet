import "./SortSelector.css";

export default function SortSelector({ setFilteredData }) {
  const handleSort = (value) => {
    setFilteredData((prevItem) => {
      const newArray = [...prevItem];
      newArray.sort((a, b) => {
        if (typeof a[value] === "number") {
          return a[value] - b[value];
        } else if (typeof a[value] === "string") {
          return a[value].localeCompare(b[value]);
        }
        return 0;
      });
      return newArray;
    });
  };

  return (
    <div className="sort-container">
      <span className="sort-span">Sort by</span>
      <select
        className="sort-selector"
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="title">Name</option>
        <option value="price">Cost</option>
      </select>
    </div>
  );
}
