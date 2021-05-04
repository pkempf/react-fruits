/** choose a random item from array of items */

function choice(items) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

/** remove an item from items and return it, if it's there */

function remove(items, item) {
  let idx = items.indexOf(item);

  if (idx >= 0) return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

export { choice, remove };
