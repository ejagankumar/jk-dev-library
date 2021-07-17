import { LinkedList, ListNode } from "./LinkedList";
import { Queue } from "./Queue";
// import { Stack } from "./Stack";
import { OtherStack as Stack } from "./Stack";
export const utilFunction = () => {
    console.log("util funcation");


    let node1 = new ListNode(2)
    let node2 = new ListNode(5)
    node1.next = node2
    let list = new LinkedList(node1)
    console.log(list.head);
    console.log(list.size());
    console.log(list.getFirst());
    console.log(list.head.next.data) //returns 5











    console.log("************************************   ************************************");


    // creating object for queue class
    var queue = new Queue();


    // Testing dequeue and pop on an empty queue
    // returns Underflow
    console.log(queue.dequeue());

    // returns true
    console.log(queue.isEmpty());

    // Adding elements to the queue
    // queue contains [10, 20, 30, 40, 50]
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    queue.enqueue(60);

    // returns 10
    console.log(queue.front());

    // removes 10 from the queue
    // queue contains [20, 30, 40, 50, 60]
    console.log(queue.dequeue());

    // returns 20
    console.log(queue.front());

    // removes 20
    // queue contains [30, 40, 50, 60]
    console.log(queue.dequeue());

    // printing the elements of the queue
    // prints [30, 40, 50, 60]
    console.log(queue.printQueue());

    console.log("************************************   ************************************");
    // function to generate binary numbers
    function generatePrintBinary(n) {
        // Create an empty queue of strings
        var q = new Queue();

        // Enqueue the first binary number
        q.enqueue("1");

        // This loops is like BFS of a tree with 1 as root
        // 0 as left child and 1 as right child and so on
        while (n-- > 0) {
            // print the front of queue
            var s1 = q.front();
            q.dequeue();
            console.log(s1);

            // Store s1 before changing it
            var s2 = s1;

            // Append "0" to s1 and enqueue it
            q.enqueue(s1 + "0");

            // Append "1" to s2 and enqueue it. Note that s2 contains
            // the previous front
            q.enqueue(s2 + "1");
        }
    }

    // calling the above function    
    // prints [1 10 11 100 101]
    generatePrintBinary(5);





    console.log("************************************   ************************************");




    // Performs Postfix Evaluation on a given exp
    function postFixEvaluation(exp) {
        var stack = new Stack();
        for (var i = 0; i < exp.length; i++) {
            var c = exp[i];
            if (!isNaN(c))
                stack.push(c - '0');
            else {
                var val1 = stack.pop();
                var val2 = stack.pop();
                if (val1 == "Underflow" || val2 == "Underflow")
                    return "Can't perform postfix evaluation";
                switch (c) {
                    case '+':
                        stack.push(val2 + val1);
                        break;

                    case '-':
                        stack.push(val2 - val1);
                        break;

                    case '/':
                        stack.push(val2 / val1);
                        break;

                    case '*':
                        stack.push(val2 * val1);
                        break;
                }
            }
        }

        return stack.pop();
    }

    // calling the above method
    // returns 9
    console.log(postFixEvaluation("235*+8-"));

    // returns postfix evaluation can't be performed
    console.log(postFixEvaluation("23*+"));
}

