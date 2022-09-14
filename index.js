let arr = [1, 2, 3, 4];

let newArr = arr.map((val, i, arr) => {
  return {
    value: val,
    index: i,
  };
});

console.log(newArr);
// newArr = [
  // {value; 1, index: 0},
  // {value; 2, index: 1};
  // {value; 3, index: 2},
  // {value; 4, index: 3};
]s
