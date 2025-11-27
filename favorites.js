const islandContainer = document.getElementById("islandContainer");

// SAVED TO FAVORITES
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let isGrid = false;

// ISLAND CARD
function displayFavorites(list) {
  islandContainer.innerHTML = "";
  list.forEach(island => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      img src="${island.image}" alt="${island.name}" class="main-img">
      <img src="assets/icons/heart.png" class="favorite-icon active" alt="Favorite">

      <div class="card-content">
        <h3>${island.name}</h3>
        <p>${island.location}</p>
      </div>
    `;
    
    // ISLAND DETAILS
    card.querySelector(".card-content").addEventListener("click", () => {
      localStorage.setItem("selectedIsland", JSON.stringify(island));
      window.location.href = "island_details.html";
    });

    // REMOVED FROM FAVORITES
    const heart = card.querySelector(".favorite-icon");
    heart.addEventListener("click", (e) => {
      e.stopPropagation();
      favorites = favorites.filter(fav => fav.name !== island.name);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      displayFavorites(favorites);
    });

    islandContainer.appendChild(card);
  });
}
displayFavorites(favorites);

// LAYOUT
const dropdown = document.querySelector(".dropdown");
const toggleView = document.getElementById("toggleView");
const linearView = document.getElementById("linearView");
const gridView = document.getElementById("gridView");

toggleView.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("open");
});

// LINEAR VIEW
linearView.addEventListener("click", () => {
  isGrid = false;
  islandContainer.style.gridTemplateColumns = "1fr";
  dropdown.classList.remove("open");
});

// GRID VIEW
gridView.addEventListener("click", () => {
  isGrid = true;
  islandContainer.style.gridTemplateColumns = "1fr 1fr";
  dropdown.classList.remove("open");
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) dropdown.classList.remove("open");
});