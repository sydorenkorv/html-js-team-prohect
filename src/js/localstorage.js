export function getFromLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
