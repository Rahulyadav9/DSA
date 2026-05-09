###Explain method chaining in JavaScript by implementing a calculator that performs the basic actions like add, subtract, divide, and multiply.

Example
```js
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);
//20
```
### solution
```js
function solve(stdin, value) {
	// write your code here
    calculator = {
        value:0,
      
        add(val){
            this.value+=val;
            return this;
        },
        subtract(val){
            this.value-=val;
            return this;
        },
        divide(val){
            this.value/=val;
            return this;
        },
        multiply(val){
            this.value*=val;
            return this;
        },
        total() {
            return this.value;
        }
    
    }
    return eval(stdin)
}


// accept stdin
;(() => {
    process.stdin.resume()
    process.stdin.setEncoding('utf-8')

    let input = ''
    process.stdin.on('data', (chunk) => {
    input += chunk
    })

    process.stdin.on('end', () => {
        solve(input)
    })
})()
```

```input
calculator.add(10).subtract(2).divide(2).multiply(5)
console.log(calculator.total());
```
