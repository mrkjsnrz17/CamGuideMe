const islandContainer = document.getElementById("islandContainer");
let savedLayout = localStorage.getItem("layout") || "grid";
let isGrid = savedLayout === "grid"; 

// LOAD FAVORITES
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// LOAD VISITED
let visited = JSON.parse(localStorage.getItem("visited")) || [];

// THEME FUNCTION - LIGHT, DARK, SYSTEM DEFAULT
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
        document.documentElement.style.setProperty('--background', '#ffffff');
        document.documentElement.style.setProperty('--text', '#1e1e1e');
        document.documentElement.style.setProperty('--card-bg', '#ffffff');
        document.documentElement.style.setProperty('--subtext', '#555');
        document.documentElement.style.setProperty('--icon-filter', 'brightness(0) invert(1)'); 
    } else if (theme === 'dark') {
        document.documentElement.style.setProperty('--background', '#121212');
        document.documentElement.style.setProperty('--text', '#f4f4f4');
        document.documentElement.style.setProperty('--card-bg', '#1e1e1e');
        document.documentElement.style.setProperty('--subtext', '#ccc');
        document.documentElement.style.setProperty('--icon-filter', 'invert(0)'); 
    } else if (theme === 'system') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }
}

// LOAD THEME
const savedTheme = localStorage.getItem('theme') || 'system';
applyTheme(savedTheme);

if (savedTheme === 'system' && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        applyTheme('system');
    });
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
}

// LAYOUT
function setLayout() {
    if (isGrid) {
        islandContainer.style.gridTemplateColumns = "1fr 1fr 1fr";
        islandContainer.classList.remove("linear-view");
        localStorage.setItem("layout", "grid");
    } else {
        islandContainer.style.gridTemplateColumns = "1fr";
        islandContainer.classList.add("linear-view");
        localStorage.setItem("layout", "linear");
    }
}

// CATEGORY DROPDOWN
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-content");
const arrowIcon = document.querySelector(".arrow-icon");

dropdownBtn.addEventListener("click", () => {
    const isOpen = dropdownMenu.style.display === "flex";
    dropdownMenu.style.display = isOpen ? "none" : "flex";

    if (isOpen) arrowIcon.classList.remove("arrow-rotate");
    else arrowIcon.classList.add("arrow-rotate");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-dropdown")) {
        dropdownMenu.style.display = "none";
        arrowIcon.classList.remove("arrow-rotate");
    }
});

// SEARCH FUNCTION
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    const filteredIslands = islands.filter(island =>
        island.name.toLowerCase().includes(keyword) ||
        island.location.toLowerCase().includes(keyword)
    );

    displayIslands(filteredIslands);

    clearBtn.style.display = searchInput.value ? "block" : "none";
});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    searchInput.focus();

    sortIslands(defaultSort); // Use default sort when clearing search
});

// --- FILTER DROPDOWN ---
const filterBtn = document.querySelector(".filter-button");
const filterMenu = document.querySelector(".filter-menu");
const filterIcon = filterBtn.querySelector("img");
const filterOptions = filterMenu.querySelectorAll("a");

// Default filter
const defaultSort = localStorage.getItem("selectedSort") || "name-asc"; // A to Z

// --- FUNCTION: Update circle icons ---
function updateFilterCircles(selectedSort) {
    filterOptions.forEach(option => {
        const circle = option.querySelector(".filter-circle");
        if (option.dataset.sort === selectedSort) {
            circle.src = "assets/icons/filled.png";   // selected
        } else {
            circle.src = "assets/icons/unfilled.png"; // not selected
        }
    });
}

// --- FUNCTION: Sort islands ---
function sortIslands(sortType) {
    let sortedIslands = [...islands];
    switch(sortType) {
        case "name-asc": // A to Z
            sortedIslands.sort((a,b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            sortedIslands.sort((a,b) => b.name.localeCompare(a.name));
            break;
        case "location": // Municipality
            sortedIslands.sort((a,b) => a.location.localeCompare(b.location));
            break;
        case "nearby":
            // nearby logic
            break;
    }
    displayIslands(sortedIslands);
}

// --- INITIALIZE DEFAULT FILTER ---
updateFilterCircles(defaultSort);
sortIslands(defaultSort); // This will sort AND display islands by default

// --- BUTTON CLICK ---
filterBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const isOpen = filterMenu.style.display === "flex";

    if (isOpen) {
        filterMenu.style.display = "none";
        filterBtn.classList.remove("open");
        filterIcon.src = "assets/icons/filter.png";
    } else {
        filterMenu.style.display = "flex";
        filterBtn.classList.add("open");
        filterIcon.src = "assets/icons/close.png";
    }
});

// --- CLOSE DROPDOWN WHEN CLICKING OUTSIDE ---
document.addEventListener("click", (e) => {
    if (!e.target.closest(".filter-dropdown")) {
        filterMenu.style.display = "none";
        filterBtn.classList.remove("open");
        filterIcon.src = "assets/icons/filter.png";
    }
});

// --- OPTION CLICK ---
filterOptions.forEach(option => {
    option.addEventListener("click", (e) => {
        e.preventDefault();
        const sortType = option.dataset.sort;

        sortIslands(sortType);
        updateFilterCircles(sortType);
        localStorage.setItem("selectedSort", sortType); // Save selection

        filterMenu.style.display = "none";
        filterBtn.classList.remove("open");
        filterIcon.src = "assets/icons/filter.png";
        updateFilterCircles(sortType);
    });
});

// --- ISLAND CARDS ---
function displayIslands(list) {
    islandContainer.innerHTML = "";
    setLayout();

    list.forEach(island => {
        const card = document.createElement("div");
        card.className = "card";

        const isFavorited = favorites.some(fav => fav.name === island.name);
        const isVisited = visited.some(v => v.name === island.name);

        card.innerHTML = `
            <img src="${island.image}" alt="${island.name}" class="main-img">

            <img src="assets/icons/save.png"
                class="favorite-icon ${isFavorited ? "active" : ""}" 
                alt="Favorite">

            <img src="assets/icons/visited.png"
                class="visited-icon ${isVisited ? "active" : ""}" 
                alt="Visited">

            <div class="card-content">
                <h3>${island.name}</h3>
                <p>${island.location}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            localStorage.setItem("selectedIsland", JSON.stringify(island));
            window.location.href = "island_details.html";
        });

        // FAVORITES CLICK
        const heart = card.querySelector(".favorite-icon");
        heart.addEventListener("click", (e) => {
            e.stopPropagation();
            if (heart.classList.contains("active")) {
                heart.classList.remove("active");
                favorites = favorites.filter(fav => fav.name !== island.name);
            } else {
                heart.classList.add("active");
                favorites.push(island);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });

        // VISITED CLICK
        const visitedIcon = card.querySelector(".visited-icon");
        visitedIcon.addEventListener("click", (e) => {
            e.stopPropagation();
            if (visitedIcon.classList.contains("active")) {
                visitedIcon.classList.remove("active");
                visited = visited.filter(v => v.name !== island.name);
            } else {
                visitedIcon.classList.add("active");
                visited.push(island);
            }
            localStorage.setItem("visited", JSON.stringify(visited));
        });

        islandContainer.appendChild(card);
    });
}

// LAYOUT FUNCTIONS
function toggleGridView() {
    isGrid = true;
    setLayout();
}

function toggleLinearView() {
    isGrid = false;
    setLayout();
}

// Auto highlight active page in header menu
const menuItems = document.querySelectorAll('.header-menu .menu-item');
menuItems.forEach(item => {
    const link = item.getAttribute('href');
    if (link === window.location.pathname.split('/').pop()) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
});
