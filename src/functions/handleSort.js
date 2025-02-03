export default function handleSort(sortType, setFilteredData) {
  setFilteredData((prevItem) => {
    const newArray = [...prevItem];
    newArray.sort((a, b) => {
      if (sortType === "rating") {
        return b[sortType] - a[sortType];
      } else if (typeof a[sortType] === "number") {
        return a[sortType] - b[sortType];
      } else if (typeof a[sortType] === "string") {
        return a[sortType].localeCompare(b[sortType]);
      }
      return 0;
    });
    return newArray;
  });
}
