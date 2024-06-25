function calculate(args) {
    let output = ''
    let keys = Object.keys(args);
    let n1 = args[keys[0]];
    let n2 = args[keys[1]];
    let op = args[keys[2]];
    if ( op === "+" ){
        output = n1 + n2
    }else if ( op === "-" ){
        output = n1 - n2
    }else{
        output = "Not supported"
    }
    return output;
}
console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: '-' }));  // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: 'x' }));  // expected output: 'Not supported'