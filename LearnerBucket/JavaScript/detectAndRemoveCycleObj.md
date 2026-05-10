# Detect and Remove Cycle in JavaScript Object

## What is Circular Reference?

A circular reference happens when an object refers back to itself.

```javascript
const obj = {
    name: "Rahul"
};

obj.self = obj;
```

### Structure

```javascript
obj = {
   name: "Rahul",
   self: obj
}
```

---

# Problem with Circular Objects

```javascript
JSON.stringify(obj);
```

### Error

```javascript
TypeError: Converting circular structure to JSON
```

Because JSON does not support circular references.

---

# Detect Cycle in Object

## Using WeakSet

```javascript
function hasCycle(obj, seen = new WeakSet()) {

    if (obj && typeof obj === "object") {

        // cycle found
        if (seen.has(obj)) {
            return true;
        }

        // store visited object
        seen.add(obj);

        // recursively check properties
        for (let key in obj) {
            if (hasCycle(obj[key], seen)) {
                return true;
            }
        }
    }

    return false;
}
```

## Example

```javascript
const obj = {
    name: "Rahul"
};

obj.self = obj;

console.log(hasCycle(obj));
```

### Output

```javascript
true
```

---

# Remove Cycle from Object

```javascript
function removeCycle(obj, seen = new WeakSet()) {

    if (obj && typeof obj === "object") {

        // cycle detected
        if (seen.has(obj)) {
            return undefined;
        }

        // store visited object
        seen.add(obj);

        for (let key in obj) {
            obj[key] = removeCycle(obj[key], seen);
        }
    }

    return obj;
}
```

## Example

```javascript
const obj = {
    name: "Rahul"
};

obj.self = obj;

console.log(removeCycle(obj));
```

### Output

```javascript
{
   name: "Rahul",
   self: undefined
}
```

---

# Why Use WeakSet?

## Advantages

* Stores object references only
* Prevents memory leaks
* Best for recursion and circular detection

---

# Important Interview Point

```javascript
obj.self === obj
```

### Output

```javascript
true
```

Because both point to the same object reference.

---

# Time Complexity

| Operation    | Complexity |
| ------------ | ---------- |
| Detect Cycle | O(n)       |
| Remove Cycle | O(n)       |

`n = number of object properties`
