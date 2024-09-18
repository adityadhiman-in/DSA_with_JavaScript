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
    front(){
        return this.queue[0];
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return this.queue.length;
    }
    printQueue(){
        let queueString = "";
       for(let i = 0; i < this.size(); i++){
          queueString += this.queue[i] + " ";
       }
       console.log(queueString);
    }
}

const myQueue = new Queue();

myQueue.enqueue("hello");
myQueue.enqueue("world");

console.log(myQueue.front());
console.log(myQueue.size());
myQueue.printQueue();