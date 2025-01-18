async function fetchItems() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error("Ошибка при получении данных", error);
  }
}

export const result = fetchItems();
