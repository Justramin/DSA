class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Append a node to the end of the list
    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Prepend a node to the beginning of the list
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Print the linked list
    print() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.value + " -> ");
            current = current.next;
        }
        console.log("null"); 
    }

    // Find the middle node of the list
    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow ? slow.value : null;
    }

    // Delete a node by value
    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Delete the middle node
    deleteMiddle() {
        if (!this.head || !this.head.next) return;

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        if (prev) {
            prev.next = slow.next;
        }
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next; 
            current.next = prev; 
            prev = current; 
            current = next;
        }

        this.head = prev; 
    }

    // Traverse and perform an operation on each node
    traverse(callback) {
        let current = this.head;
        while (current) {
            callback(current.value);
            current = current.next;
        }
    }

    // Insert a node after a specific node value
    insertAfter(afterValue, newValue) {
        let current = this.head;
        while (current && current.value !== afterValue) {
            current = current.next;
        }

        if (current) {
            let newNode = new Node(newValue);
            newNode.next = current.next;
            current.next = newNode;
        }
    }
}

// Example Usage
let list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print(); // Output: 5 -> 10 -> 20 -> 30 -> null

console.log("Middle Node:", list.findMiddle()); // Output: 20

list.delete(20);
list.print(); // Output: 5 -> 10 -> 30 -> null

list.insertAfter(10, 25);
list.print(); // Output: 5 -> 10 -> 25 -> 30 -> null

list.reverse();
list.print(); // Output: 30 -> 25 -> 10 -> 5 -> null

list.deleteMiddle();
list.print(); // Output: 30 -> 25 -> 5 -> null

list.traverse(value => console.log("Node Value:", value));
// Output:
// Node Value: 30
// Node Value: 25
// Node Value: 5


