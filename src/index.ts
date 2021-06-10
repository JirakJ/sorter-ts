import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([10,3,-5,0]);
console.log(numbersCollection.data);

numbersCollection.sort()
console.log(numbersCollection.data);
console.log(numbersCollection.length);

const charactersCollection = new CharactersCollection("ThisIsATest");
console.log(charactersCollection.data);

charactersCollection.sort()
console.log(charactersCollection.data);
console.log(charactersCollection.length);

const linkedListCollection = new LinkedList();
linkedListCollection.add(0);
linkedListCollection.add(5);
linkedListCollection.add(1);
linkedListCollection.add(-5);
linkedListCollection.add(3);
linkedListCollection.print();
linkedListCollection.sort()

linkedListCollection.print();
console.log(linkedListCollection.length);
