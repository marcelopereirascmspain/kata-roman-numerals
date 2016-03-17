/*
  type ExpandedTerm = {
    digit: Number,
    placeValue: Number
  };

  type alias ExpandedForm = [ExpandedTerm];

  expand :: Number -> ExpandedForm

  Example:
  
  expand(34) === [{ digit: 3, placeValue: 10 }, { digit: 4, placeValue: 1 }]
*/
export function expand(n) {
  let result = [];
  let nums = n.toString().split('');

  for (let i = 0; i < nums.length; i++) {
    result.push({
      digit: +nums[i],
      placeValue: Math.pow(10, nums.length - i - 1)
    });
  }

  return result; 
}
