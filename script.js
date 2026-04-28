async function loadData() {
  const output = document.getElementById("output");

  // Show loading message immediately
  output.innerHTML = "<h2>Loading...</h2>";

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();

    // Clear loading text
    output.innerHTML = "";

    users.forEach(user => {
      output.innerHTML += `
        <div class="box">
          <h3>${user.name}</h3>
          <p>${user.email}</p>
        </div>
      `;
    });

  } catch (err) {
    output.innerHTML = "<h2>Failed to load data ❌</h2>";
    console.log(err);
  }
}