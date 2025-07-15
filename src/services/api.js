export const getQuestion = async (category = "9", difficulty = "easy") => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&category=${category}&type=boolean`
    );

    if (response.status === 429) {
      console.error("Rate limit exceeded. Please try again later.");
      return [];
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
};
