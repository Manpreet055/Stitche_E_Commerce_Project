async function fetchData() {
  try {
    let response = await fetch("http://localhost:8000");
    
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
