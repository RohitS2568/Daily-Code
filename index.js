//9.---------------------------- Fizz Buzz

for (let i = 1; i <= 100; i++) {
    let output = ''; // Initialize output as an empty string
    
    // Check if the number is divisible by 3
    if (i % 3 === 0) output += 'Fizz';
    
    // Check if the number is divisible by 5
    if (i % 5 === 0) output += 'Buzz';
    
    // Print the output if it's not empty, otherwise print the number
    console.log(output || i);
}

function mergeTwoLists(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let mergedHead;

    if (l1.val <= l2.val) {
        mergedHead = l1;
        mergedHead.next = mergeTwoLists(l1.next, l2);
    } else {
        mergedHead = l2;
        mergedHead.next = mergeTwoLists(l1, l2.next);
    }

    return mergedHead;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = null, tail = null;
    for (let val of arr) {
        let newNode = { val, next: null };
        if (!head) {
            head = newNode;
            tail = head;
        } else {
            tail.next = newNode;
            tail = tail.next;
        }
    }
    return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Example usage
const l1 = createLinkedList([1, 2, 4]);
const l2 = createLinkedList([1, 3, 4]);
const merged = mergeTwoLists(l1, l2);
console.log(linkedListToArray(merged)); // Output: [1, 1, 2, 3, 4, 4]



