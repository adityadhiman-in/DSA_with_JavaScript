// Implementation of stack using queue

var Stack = function (){
    this.queue1 = [];
    this.queue2= [];
};

Stack.prototype.push = function (element){
    while(this.queue1.length !== 0){
        this.queue2.push(this.queue1.shift());
    }
    this.queue1.push(element);
    while(this.queue2.length !== 0){
        this.queue1.push(this.queue2.shift());
    }
};
Stack.prototype.pop = function (){
    return this.queue1.pop();
};
Stack.prototype.top = function (){
    return this.queue1[this.queue1.length - 1];
}
Stack.prototype.isEmpty = function (){
    return this.queue1.length === 0;
}

var stack = new Stack();

stack.push(1);
stack.push(2);

console.log(stack.top());
console.log(stack.pop());