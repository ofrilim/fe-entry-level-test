
export async function getLiveTodos(url) {
  const todos = await fetch(url)
  .then(res => res.json())
  .then(data => data);

  return todos;
}