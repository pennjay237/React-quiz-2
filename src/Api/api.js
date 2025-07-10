export const fetchQuestions = async () => {
  const res = await fetch("https://opentdb.com/api.php?amount=10&type=boolean");
  const data = await res.json();
  return data.results;
};
