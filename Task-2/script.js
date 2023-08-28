const getUsersBtn = document.getElementById("getUsersBtn");
const loader = document.getElementById("loader");
const userGrid = document.getElementById("userGrid");

getUsersBtn.addEventListener("click", getUsers);

async function getUsers() {
  loader.style.display = "block";
  getUsersBtn.disabled = true;

  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    const users = data.data;

    userGrid.innerHTML = "";
    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
        <img src="${user.avatar}" alt="User Avatar">
        <hr>
        <h3>${user.first_name} ${user.last_name}</h3>
        <p>${user.email}</p>
      `;
      userGrid.appendChild(userCard);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    loader.style.display = "none";
    getUsersBtn.disabled = false;
  }
}
