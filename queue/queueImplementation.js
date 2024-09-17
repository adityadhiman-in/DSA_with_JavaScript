// Implementation queue and basic functions in it

class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(element){
        this.queue.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            return ("Queue is empty");
        }
        else{
            this.queue.shift();
        }
    }
    peek(){
        return this.queue[this.size() - 1];
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return this.queue.length;
    }
}

const myQueue = new Queue();

myQueue.enqueue("hello");
myQueue.enqueue("world");

console.log(myQueue.peek());
console.log(myQueue.size());