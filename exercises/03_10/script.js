/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Book from "./Book.js";
import WaterBottle from "./WaterBottle.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const myBook = new Book("Eloquent JavaScript", 399, "yellow", 40, 500);
console.log(myBook);

const myWaterBottle = new WaterBottle(
  350,
  "plastic",
  "Muji",
  "transparent",
  false
);

console.log(myWaterBottle);
console.log(myWaterBottle.open());
