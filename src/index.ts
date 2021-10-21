import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 33, -5, 0]);
const charactersCollection = new CharactersCollection("ghXkawIf");
const sorter = new Sorter(numbersCollection);
const charSorter = new Sorter(charactersCollection);

sorter.sort();
console.log(numbersCollection.data);

charSorter.sort();
console.log(charactersCollection.data);
