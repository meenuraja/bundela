const recipes = [
  {
    name: "Paneer Butter Masala",
    image: "images/paneer.jpg",
    ingredients: "Paneer, Butter, Tomato, Spices",
    instructions: "Cook tomato gravy, add paneer and butter. Simmer for 10 mins."
  },
  {
    name: "Aloo Paratha",
    image: "images/paratha.jpg",
    ingredients: "Wheat flour, Boiled potatoes, Spices",
    instructions: "Make dough, fill with masala potato, and roast on tawa."
  },
  {
    name: "Gulab Jamun",
    image: "images/gulab.jpg",
    ingredients: "Khoya, Sugar, Cardamom",
    instructions: "Make balls from khoya, fry and dip in sugar syrup."
  },
  {
    name: "pani puri",
    image: "images/pani.jpg",
    ingredients: "Paneer, Butter, Tomato, Spices",
    instructions: "Cook tomato gravy, add paneer and butter. Simmer for 10 mins."
  },
  {
    name: "chole kulche",
    image: "images/chole.avif",
    ingredients: "Wheat flour, Boiled potatoes, Spices",
    instructions: "Make dough, fill with masala potato, and roast on tawa."
  },
  {
    name: " chaat ",
    image: "images/chaat.jpg",
    ingredients: "Khoya, Sugar, Cardamom",
    instructions: "Make balls from khoya, fry and dip in sugar syrup."
  }
];

const container = document.getElementById('recipe-container');
const searchInput = document.getElementById('searchInput');

function renderRecipes(list) {
  container.innerHTML = '';
  list.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;
     container.appendChild(card);
  });
}

searchInput.addEventListener('input', function() {
  const value = this.value.toLowerCase();
  const filtered = recipes.filter(r => r.name.toLowerCase().includes(value));
  renderRecipes(filtered);
});

renderRecipes(recipes);


