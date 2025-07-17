
export const getQuestion = async (category, difficulty) => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=boolean`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
};
