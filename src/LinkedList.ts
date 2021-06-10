import {Sorter} from "./Sorter";

class Node {
    next: Node | null;

    constructor(public data: number) {}
}

export class LinkedList extends Sorter {

    head: Node | null = null; //linked list starts totally empty

    add(data: number): void {
        const node = new Node(data);

        if(!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;//this give us reference to first node in the chain
        while (tail.next) { //when tail has next node we move to it
            tail = tail.next;
        }

        //now we take node which we just created and pass it as next node to the tail
        tail.next = node;
    }

    get length(): number {
        if(!this.head) {
            //return 0 because list is empty
            return 0;
        }

        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }

        return length;
    }

    at(index: number): Node {
        if(!this.head) {
            //empty list we cannot return something
            throw new Error("Index out of bounds! (Linked list is empty.)");
        }

        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if(counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error("Index out of bounds")
    }

    compare(index: number): boolean {
        if(!this.head) {
            throw new Error("List is empty");
        }

        return this.at(index).data > this.at(index +1).data;
    }

    //just swap values which is way way easier than swap nodes
    swap(index: number): void {
        const leftNode = this.at(index);
        const rightNode = this.at(index+1);

        const leftHandSide = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHandSide;
    }

    print(): void {
        if(!this.head) {
            return;
        }

        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
