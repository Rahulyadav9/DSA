function myPromiseAll(promises) {
   return new Promise((resolve, reject)=>{
        if(!Array.isArray(promises)) {
            return reject(new TypeError('Argument should be an array!'))
        }

        if(promises.length==0) resolve([]);

        let completed = 0;
        let results = [];

        promises.forEach((promise, index)=>{
            Promise.resolve(promise).then(value=>{
                results[index] = value;
                completed++;

                if(completed === promises.length){
                    resolve(results);
                }
            }).catch(reject);
        });
   });
}

myPromiseAll([
  Promise.resolve(10),
  new Promise(res => setTimeout(() => res(20), 1000)),
  30
]).then(console.log);
// [10, 20, 30]

myPromiseAll([
  Promise.resolve(1),
  Promise.reject("Error!")
]).catch(console.error);
// Error!
