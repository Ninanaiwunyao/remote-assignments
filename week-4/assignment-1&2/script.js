//Assignment 1
function delayedResult(n1, n2, delayTime, callback) {
  window.setTimeout(() => {
    const result = n1 + n2;
    callback(result);
  }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

//Assignment 2
function ajax(url) {
  return fetch(url).then((res) => {
    return res.json();
  });
}
function render(data) {
  const result = document.querySelector("#result");
  result.textContent = data
    .map((item) => JSON.stringify(item, null, 2))
    .join("\n\n");
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});

//week-2 assignment5
function twoSum(nums, target) {
	for (let i=0; i < nums.length; i++){
    for (let j=0; j < nums.length; j++){
    if(nums[i]+nums[j] === target){
      console.log([i, j]);
      return[i,j];
    }
  }
}
return null
}
twoSum([2, 7, 11, 15], 9);
