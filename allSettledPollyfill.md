
```js
function allSettled(promises) {
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(promises)) {
            reject(new TypeError('Promises must be an array...'))
        }

        if(promises.length===0) return resolve([]);

        let results = [];
        let count = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value=>{
                results[index] = {status:'fullfilled', value};
                count++;

            }).catch(err=>{
                results[index] = {status:'rejected', err};
            }).finally(()=>{
                count++;
                if(count===promises.length){
                    resolve(results)
                }
            })
        });
    })
}


allSettled([
    new Promise(resolve=>resolve('1st resolve..')),
    new Promise((_, reject)=>reject('2st rejected..')),
    new Promise(resolve=>resolve('3rd resolve...')),
    new Promise((_, reject)=>reject('4th rejected..')),
]).then(console.log).catch(console.error)
```
