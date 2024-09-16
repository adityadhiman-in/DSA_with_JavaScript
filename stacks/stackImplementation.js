// Basic Stack Implementation

class Stack {
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element);
    };
    pop(){
        if(this.isEmpty()){
            return("stack is empty");
        }
        else{
            this.stack.pop();
        }
    }
    peek(){
        if(this.isEmpty()){
            return("stack is empty");
        }
        else{
            return this.stack[this.size() - 1];
        }
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return this.stack.length;
    }
    printStack(){
        console.log(this.stack);
    }
}

const myStack = new Stack();
myStack.push("hello");
myStack.push("bello");
myStack.push("jello");
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.printStack());