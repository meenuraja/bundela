const recipes = {
  gulab: {
    name: "Gulab Jamun",
    ingredients: "Khoya, Sugar, Cardamom",
    instructions: "Make balls from khoya, fry and dip in sugar syrup."
  },
  rasgulla: {
    name: "Rasgulla",
    ingredients: "Chhena, Sugar, Water",
    instructions: "Make balls from chhena, boil in sugar syrup."
  },
  paneer: {
    name: "Paneer Butter Masala",
    ingredients: "Paneer, Butter, Tomato, Spices",
    instructions: "Cook tomato gravy, add paneer and butter. Simmer for 10 mins."
  },
  aloo: {
    name: "Aloo Gobi",
    ingredients: "Potato, Cauliflower, Spices",
    instructions: "Cook potatoes and cauliflower with spices."
  },
  fruit: {
    name: "Fruit Salad",
    ingredients: "Mixed fruits, Honey, Lemon",
    instructions: "Mix all fruits, add honey and lemon."
  },
  green: {
    name: "Green Salad",
    ingredients: "Cucumber, Tomato, Onion, Lemon",
    instructions: "Chop all veggies, mix and add lemon juice."
  }
};

function showRecipe(key) {
  const recipe = recipes[key];
  const detail = document.getElementById('recipe-detail');
  if (recipe) {
    detail.innerHTML = `
      <div class="recipe-card">
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      </div>
    `;
  } else {
    detail.innerHTML = '';
  }
}
function toggleRecipe(id) {
  const detail = document.getElementById(id);
  if (detail.style.display === 'block') {
    detail.style.display = 'none';
  } else {
    detail.style.display = 'block';
  }
}





function filterRecipes() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const allItems = document.querySelectorAll("li");

  allItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(input)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
}
