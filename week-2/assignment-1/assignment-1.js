function max(numbers){
	let maxNum = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if ( numbers[i] > maxNum ){
            maxNum = numbers[i];
        }
    }
    return maxNum;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7