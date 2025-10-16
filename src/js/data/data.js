async function fetchData() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    return user
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}
export default fetchData;
