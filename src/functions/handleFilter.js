export default function handleFilter(e, setFilter) {
  const { name, value } = e.target;
  if (value !== "default") {
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  } else {
    setFilter((prevFilter) => ({ ...prevFilter, [name]: "" }));
  }
}
