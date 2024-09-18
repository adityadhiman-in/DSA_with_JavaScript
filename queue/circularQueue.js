// Circular Queue Implementation

var MyCircularQueue = function (k){
    this.queue = [];
    this.size = k;
};

MyCircularQueue.prototype.enqueue = function (element){
    if(this.size === this.queue.length){
        return false;
    }
    else{
    this.queue.push(element);
    return true;
    }
}
MyCircularQueue.prototype.dequeue = function (){
    
    if(this.queue.length === 0){
        return false;
    }
    else{
        this.queue.shift();
        return true;
    }
}

MyCircularQueue.prototype.front = function (){
    
    if(this.queue.length === 0){
        return -1;
    }
    else{
        return this.queue[0];
    }
}
MyCircularQueue.prototype.rear = function (){
    
    if(this.queue.length === 0){
        return -1;
    }
    else{
        return this.queue[this.queue.length - 1];
    }
}
MyCircularQueue.prototype.isEmpty = function(){
   return this.queue.length === 0;
}

MyCircularQueue.prototype.isFull =function  (){
    return this.size === this.queue.length;
}
 
const circularQueue = new MyCircularQueue(3);

console.log(circularQueue.enqueue(1));

console.log(circularQueue.enqueue(2));

console.log(circularQueue.enqueue(3));

console.log(circularQueue.dequeue());

console.log(circularQueue.enqueue(4));

console.log(circularQueue.rear());

console.log(circularQueue.isFull());

console.log(circularQueue.dequeue()); 
