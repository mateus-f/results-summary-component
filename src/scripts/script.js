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

getUserStats();
