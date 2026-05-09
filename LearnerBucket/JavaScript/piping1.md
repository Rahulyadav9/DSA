function solve(stdin) {

    // convert string input into object
    const obj = eval("(" + stdin + ")");

    const pipe = (obj) => {
        return function (...args) {

            let result = {};

            for (let key in obj) {
                let val = obj[key];

                if (typeof val === "function") {
                    result[key] = val(...args);
                }
                else if (typeof val === "object" && val !== null) {
                    result[key] = pipe(val)(...args);
                }
            }

            return result;
        };
    };

    // example arguments
    return JSON.stringify(pipe(obj)(1, 2, 3));
}


// accept stdin
;(() => {
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let input = '';

    process.stdin.on('data', (chunk) => {
        input += chunk;
    });

    process.stdin.on('end', () => {
        console.log(solve(input));
    });
})();
