const products = [
  { name: "Handmade Mug", image: "https://via.placeholder.com/200?text=Mug" },
  { name: "Wool Scarf", image: "https://via.placeholder.com/200?text=Scarf" },
  { name: "Wooden Bowl", image: "https://via.placeholder.com/200?text=Bowl" },
  { name: "Clay Vase", image: "https://via.placeholder.com/200?text=Vase" },
];

const grid = document.getElementById("productGrid");
const search = document.getElementById("searchBar");

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
    `;
    grid.appendChild(div);
  });
}

search.addEventListener("input", () => {
  const term = search.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  renderProducts(filtered);
});

renderProducts(products);
