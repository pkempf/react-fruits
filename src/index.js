import fruits from "./foods";
import { choice, remove } from "./helpers";

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please!`);
console.log(`Here you go: one ${fruit} for you.`);
console.log("Delicious! May I have another?");

let leftOver = remove(fruits, fruit);

console.log(
  `I'm sorry, we're all out of ${fruit}. We have ${leftOver.length} fruits left.`
);
