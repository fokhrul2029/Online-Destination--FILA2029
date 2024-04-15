// Get Read list data // Local-Storage
const getData = () => {
  const storedData = localStorage.getItem("FILA-2029--bookmarks");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
// Save Data on Read List  // Local-storage
const saveData = (id) => {
  const storedData = getData();
  const exist = storedData.find((data) => data === id);
  if (!exist) {
    storedData.push(id);
    localStorage.setItem("FILA-2029--bookmarks", JSON.stringify(storedData));
  }
};
//

export { getData, saveData };
