const mealsApi = (searchMeals) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => getMealsData(data.meals));
};

const getMealsData = (mealsData) => {
  // meals container
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerText = "";
  mealsData.forEach((meal) => {
    //  create div
    const createDiv = document.createElement("div");
    createDiv.classList = "col mb-4";
    createDiv.innerHTML = `
    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <button type="button" onclick="loadMeal2(${meal.idMeal})" class="btn btn-primary" data-toggle="modal" data-target="#mealsModal">
      Details
    </button>
    </div>
  </div>
    `;
    mealsContainer.appendChild(createDiv);
    // console.log(meal);
  });
};

// search meals
const searchFood = () => {
  const searchEat = document.getElementById("search-text").value;
  //   console.log(searchEat);
  mealsApi(searchEat);
};

// load meal details fetch get the details
// const loadMeal = (idMeal) => {
//   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayMealsDeatils(data.meals[0]));
// };

// another way async await api call
const loadMeal2 = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMealsDeatils(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
};

// modal function dynamic id show the details
const displayMealsDeatils = (meal) => {
  document.getElementById("mealLabel").innerText = meal.strMeal;
  const mealsBody = document.getElementById("meals-body");
  mealsBody.innerHTML = `
  <img class="w-50 d-block mx-auto" src="${meal.strMealThumb}" />

  `;
};

mealsApi("rice");
