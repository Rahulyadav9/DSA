# Execute Async Functions in Series

## Problem Statement

Implement a function that takes a list of asynchronous functions as input and executes them one by one in sequence.

The next task should start only after the previous task is completed.

---

# Example

```javascript id="2y0p3h"
const task1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
};

const task2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 1000);
    });
};

const task3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 1000);
    });
};
```

---

# Expected Output

```text id="jlwm18"
Task 1 completed
Task 2 completed
Task 3 completed
```

Each task runs only after the previous one finishes.

---

# Solution Using async/await

```javascript id="jlwm19"
async function runTasksInSeries(tasks){

    for(let task of tasks){

        await task();
    }
}
```

---

# Usage

```javascript id="jlwm1a"
runTasksInSeries([task1, task2, task3]);
```

---

# How It Works

## Step 1

Loop through all tasks:

```javascript id="jlwm1b"
for(let task of tasks)
```

---

## Step 2

Wait for current task to finish:

```javascript id="jlwm1c"
await task();
```

`await` pauses execution until promise resolves.

---

## Execution Flow

```text id="jlwm1d"
task1()
   ↓ completed
task2()
   ↓ completed
task3()
```

---

# Complete Example

```javascript id="jlwm1e"
const task1 = () => {
    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Task 1 completed");
            resolve();

        }, 1000);
    });
};

const task2 = () => {
    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Task 2 completed");
            resolve();

        }, 1000);
    });
};

const task3 = () => {
    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Task 3 completed");
            resolve();

        }, 1000);
    });
};

async function runTasksInSeries(tasks){

    for(let task of tasks){

        await task();
    }
}

runTasksInSeries([task1, task2, task3]);
```

---

# Alternative Solution Using reduce()

```javascript id="jlwm1f"
function runTasksInSeries(tasks){

    tasks.reduce((promise, currentTask) => {

        return promise.then(() => currentTask());

    }, Promise.resolve());
}
```

---

# Explanation of reduce() Approach

Initial value:

```javascript id="jlwm1g"
Promise.resolve()
```

Creates resolved promise.

Then chaining happens:

```text id="jlwm1h"
Promise.resolve()
   .then(task1)
   .then(task2)
   .then(task3)
```

---

# Time Complexity

| Operation     | Complexity |
| ------------- | ---------- |
| Execute tasks | O(n)       |

Where:

* `n = number of tasks`

---

# Important Interview Points

## Parallel Execution

```javascript id="jlwm1i"
Promise.all(tasks.map(task => task()));
```

Runs all tasks together.

---

## Series Execution

```javascript id="jlwm1j"
await task();
```

Runs one by one.

---

# Difference Between Parallel and Series

| Series          | Parallel         |
| --------------- | ---------------- |
| One at a time   | All together     |
| Slower          | Faster           |
| Maintains order | Concurrent       |
| Uses await loop | Uses Promise.all |

---

# Real World Use Cases

* Database migrations
* API rate limiting
* Sequential file processing
* Ordered task execution
* Queue systems
