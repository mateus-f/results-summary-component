async function getUserStats() {
  const DATA_PATH = "./src/data/data.json";

  try {
    const response = await fetch(DATA_PATH);
    const stats = await response.json();
    return stats;
  } catch (error) {
    console.error("Sorry, but anything goes wrong:\n", error);
  }
}

async function showStats() {
  const categoryWrapper = document.querySelector(".category-scores");
  const elements = await getUserStats();

  elements.forEach(element => {
    categoryWrapper.insertAdjacentHTML("beforeend", `
      <div class="category ${element.category.toLowerCase()}">
        <div class="content">
          <img src="${element.icon}" alt=""></img>
          <span>${element.category}</span>
        </div>
        <div class="info">
          <span>${element.score}</span>
          <span>/</span>
          <span>100</span>
        </div>
      </div>
    `)
  });
}

showStats();
