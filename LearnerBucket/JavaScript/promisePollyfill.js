
###Write an function in javascript which works similar like original promise?

  ```js
  class MyPromise {

    constructor(executor) {

        this.state = "pending";
        this.value = undefined;

        this.onResolveCallbacks = [];
        this.onRejectCallbacks = [];

        const resolve = (value) => {

            if (this.state === "pending") {

                this.state = "fulfilled";
                this.value = value;

                this.onResolveCallbacks.forEach(fn => fn(value));
            }
        };

        const reject = (reason) => {

            if (this.state === "pending") {

                this.state = "rejected";
                this.value = reason;

                this.onRejectCallbacks.forEach(fn => fn(reason));
            }
        };

        try {
            executor(resolve, reject);
        }
        catch (error) {
            reject(error);
        }
    }

    then(onFulfilled) {

        return new MyPromise((resolve, reject) => {

            if (this.state === "fulfilled") {

                const result = onFulfilled(this.value);
                resolve(result);
            }

            else if (this.state === "pending") {

                this.onResolveCallbacks.push((value) => {

                    const result = onFulfilled(value);
                    resolve(result);
                });
            }
        });
    }

    catch(onRejected) {

        return new MyPromise((resolve, reject) => {

            if (this.state === "rejected") {

                const result = onRejected(this.value);
                resolve(result);
            }

            else if (this.state === "pending") {

                this.onRejectCallbacks.push((reason) => {

                    const result = onRejected(reason);
                    resolve(result);
                });
            }
        });
    }
}
```js
