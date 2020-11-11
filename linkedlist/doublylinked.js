function LinkedList() {
    // all linked lists should have a head
    this.head = null;
    // should have an end/tail
    this.tail = null;
    // set an initial length. for easy access
    this.length = 0;
}
//now need to define what makes a node

//making a doubly linked list NODE
function Node() {
    this.next = null;
    this.prev = null;
    this.content = null;
}

//need to be able to add content to be held by a node. instructor likes _content for passing things into a function,

// the add function needs to - find out who comes before it, add content, find out who comes after it.
LinkedList.prototype.add = function(_content){
    //take our passed in content and set it to the node's content
    var node = new Node(); node.content = _content;

    //for an empty node....
    if (this.head == null) {
        this.head = node; this.length = 1;
        return node;
    }
    //for a node with a head but nothing else?
    if (this.tail ==null) {
        this.tail = node;
        //tail's pointer that points to node before it
        this.tail.prev = this.head;
        this.head.next = this.tail;
        this.length = 2;
        return node;
    }
    // if there are at least two nodes, and adding at the end.. (putting a new node on the end)
    // add it at the end
    this.tail.next = node;
    // say it's previous node is the tail.
    node.prev = this.tail;
    //shift new tail identification to the newly added last node.
    this.tail = node;
    this.length ++;
}

LinkedList.prototype.print = function() {
    //returns a string of the list to put on the screen
    if (this.head == null) return "Empty list";
    var s ="";
    var node = this.head;
    while (node!= null) {
        s += node.content + "   ";
        node = node.next;
    }
    return s;
}