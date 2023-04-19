// function twoSum(numbers, target) {
//   // ...
//   let newArr = [];
//   for(let i = 0; i < numbers.length; i++) {
//     for(let j= i+1; j < numbers.length; j++){
//       if(numbers[i] + numbers[j] === target) {
//         newArr.push(i);
//         newArr.push(j);
//       }
//     }
//   }
//   return newArr;
// }
function twoSum(numbers, target) {
  // ...
  let hash = {};
  numbers.forEach((item, i) => {
    hash[item] = i;
  });

  for(let i = 0; i < numbers.length; i++){
    let value = target - numbers[i];

    if(hash[value] !== undefined && hash[value] !== i){
      return [i, hash[value]]
    }
  }
}
