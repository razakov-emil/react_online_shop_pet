export default function handleSort(value, setFilteredData) {
  setFilteredData((prevItem) => {
    const newArray = [...prevItem];
    newArray.sort((a, b) => {
      if (value === "rating") {
        return b[value] - a[value];
      } else if (typeof a[value] === "number") {
        return a[value] - b[value];
      } else if (typeof a[value] === "string") {
        return a[value].localeCompare(b[value]);
      }
      return 0;
    });
    return newArray;
  });
}
