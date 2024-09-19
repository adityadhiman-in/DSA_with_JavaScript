# Queue in Data Structures

## Overview

A **Queue** is a linear data structure that follows the **First In First Out (FIFO)** principle. This means that the element inserted first will be the first one to be removed. It is similar to a line or queue of people, where the first person in line is served first.

Queues are widely used in various applications such as managing requests in web servers, handling processes in operating systems, and in many real-world scenarios like scheduling and order management.

### Key Operations

- **Enqueue**: Add an element to the back of the queue.
- **Dequeue**: Remove an element from the front of the queue.
- **Peek/Front**: Get the front element of the queue without removing it.
- **IsEmpty**: Check if the queue is empty.
- **Size**: Get the total number of elements in the queue.

### Types of Queues

- **Simple Queue**: A basic queue where elements are added to the rear and removed from the front.
- **Circular Queue**: A queue where the positions in the queue wrap around once they reach the end, making it more space-efficient.
- **Priority Queue**: A queue where each element is associated with a priority, and elements are dequeued based on their priority.

---

## Queue Implementations

### 1. Basic Queue Implementation

This implementation focuses on the simple operations of enqueueing, dequeueing, and checking the status of the queue. It's implemented using JavaScript arrays.

### 2. Circular Queue Implementation

A Circular Queue is an optimized version of the queue that overcomes the limitation of using static arrays. In this implementation, the rear of the queue wraps around to the front when there is empty space.
