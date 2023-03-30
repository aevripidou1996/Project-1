// API to random recipe generator
const getMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createMeal(data.meals[0]);
    });
};

const getMealElement = document.getElementById("getMealBtn");
getMealElement.addEventListener("click", getMeal);

const mealContainerElement = document.getElementById("mealContainer");

const createMeal = (meal) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  const newInnerHTML = `
        <div class="row">
            <div class="columns five">
                <img src="${meal.strMealThumb}" alt="Meal Image">
                ${
          meal.strCategory
            ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
            : ""
        }
                ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ""}
                ${
          meal.strTags
            ? `<p><strong>Tags:</strong> ${meal.strTags
                .split(",")
                .join(", ")}</p>`
            : ""
        }
                <h5>Ingredients:</h5>
                <ul>
          ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
                </ul>
            </div>
            <div class="columns seven">
                <h4>${meal.strMeal}</h4>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
        ${
      meal.strYoutube
        ? `
        <div class="row">
            <h3>Video Recipe</h3>
            <div class="videoWrapper">
                <iframe width="420" height="315"
                src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
                </iframe>
            </div>
        </div>`
        : ""
    }
    `;

  mealContainerElement.innerHTML = newInnerHTML;
};