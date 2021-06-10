import {Sorter} from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(public data: string ) {
        super();
    }

    swap(index: number): void {
        const characters = this.data.split("");

        const leftHandSideElement = characters[index];
        characters[index] = characters[index + 1];
        characters[index + 1] = leftHandSideElement;

        this.data = characters.join("");
    }
    compare(index: number): boolean {
        return this.data[index].toLowerCase() > this.data[index + 1].toLowerCase();
    }
    get length(): number {
        return this.data.length;
    }
}
