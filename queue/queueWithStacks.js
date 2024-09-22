// Implement queue with stacks
var Queue = function(){
    this.stack1 = [];
    this.stack2 = [];
};

Queue.prototype.enQueue = function(element){
    this.stack1.push(element);
};

Queue.prototype.deQueue = function(){
    if(this.stack2.length === 0){
        while(this.stack1.length !== 0){
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
};

Queue.prototype.front = function(){
    if(this.stack2.length > 0){
        return this.stack2[this.stack2.length - 1];
    }
    return this.stack1[0];
};

Queue.prototype.rear = function(){
    if(this.stack1.length > 0){
        return this.stack1[this.stack1.length - 1];
    }
    return this.stack2[0];
};

Queue.prototype.isEmpty = function(){
    return this.stack1.length === 0 && this.stack2.length === 0;
};

var queue = new Queue();

queue.enQueue(1);
queue.enQueue(2);

console.log(queue.front());  // Output: 1
console.log(queue.rear());   // Output: 2
console.log(queue.deQueue()); // Output: 1
console.log(queue.front());  // Output: 2
