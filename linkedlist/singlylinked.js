// any node in a singly linked list will need a value and a pointer to the next node.
//doubly linked lists need both a next and a prev.
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

        //Push function, adding a new tail
    addAtTail(val) {
        // make the node out of the value
        let newNode = newNode(val)
        // if there is nothing in the list yet...
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        // returns whole list
        return this
    }

        //Pop function, removing the tail
    deleteAtTail(val) {
        // if there is NOTHING in the list..
        if (!this.head) return undefined;
        //otherwise walk the list
        let current = this.head;
        let newTail = current;
        //while the node you're on has one after it...
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        //after we get to the end..
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        //handling the edge case of only one thing IN the list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

        //shift function, for removing at the front
    deleteAtHead() {
        // 1. check for an empty list
        if (!this.head) return undefined;
        // 2. store the current head in a var,
        let currentHead = this.head;
        // 3. set head as current head's next (because we are taking away the current head, so we need to set a new head)
        this.head = currentHead.next;
        // 4. decrement length 
        this.length--;
        //edge case of only one thing in list, resetting tail value to null to match.
        if (this.length ===0){
            this.tail = null;
        }
        return currentHead;
    }

        //unshift function, for adding at the head.
    addAtHead(val){
        let newNode = new Node(val);
        // nothing in the list yet?
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

        //finding a node at a specific 'index'. 
    get(index) {
        //we care if the index in question is greater than zero and <= the list's length...
        if (index < 0 || index >= this.length) return null;
        //otherwhise let's count up the list and check to see if we're at the requested index
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

        // to SET the value of a node at given index...
    set(index, val) {
        // first we find it with get...
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

        // to INSERT a node directly into the list at a certain spot...
    insert(index, val) {
            // 1. check if index is greater than 0 (if =0, could just addAtHead) and smaller than length (if = length could just addAtTail)
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.addAtTail(val);
        if(index === 0) return !!this.addAtHead(val);
            // 2. for all other insertions.. 
        let newNode = new Node(val);
            // need to save the node before and the node after our insertion
        let prev = this.get(index -1);
        let temp = prev.next;

            // assign the previous node's next to our new one
        prev.next = newNode;
            // assign our new node's next to the temp (one that comes after insertion)
        newNode.next = temp;
        this.length++;
        return true;
    }

        // this will remove a node at a given index (unlike removing at head or tail)
    remove(index) {
            // edge case, are we outside of the list itself?
        if (index < 0 || index >= this.length) return undefined;
            // if we're at the head...
        if (index === 0) return this.deleteAtHead();
            //or at the tail..
        if(index === this.length -1) return this.deleteAtTail();

            // otherwise... find the node before the one we remove
        let previousNode = this.get(index-1);
            // set its next to be "removed"
        let removed = previousNode.next;
            // set the next from said previous node to be the next of the node to be removed
        previousNode.next = removed.next;
        this.length--;
            // returning the node we deleted 
        return removed;
    }

        // flipping the whole list on its... head!
    reverse(){
            // declaring 'flippingNode', our old head, as a saved starting point for looping through the list and 'flipping' the next pointer.
        let flippingNode = this.head;
            // switch head to tail
        this.head = this.tail;
            // and tail to node, which is really saved head.
        this.tail = flippingNode;
        
            // declaring our loop variables
        let next;
            // starting at the head, there will be no prev at first
        let prev = null;
            
            // as we iterate...
        for (let i = 0; i < this.length; i++) {
                // first we set 'next' as the node following our new var 'node' in the original list. 
            next = flippingNode.next;
                // then removing this node's 'next', or if there is already a prev, setting that.
            flippingNode.next = prev;
                // 'prev' becomes node we just finished
            prev = flippingNode;
                // the node we care about becomes the 
            flippingNode = next;
        }
        return this;
    }
}