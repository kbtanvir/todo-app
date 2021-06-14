const store = [
  { selected: false, id: "1" },
  { selected: true, id: "2" },
  { selected: true, id: "3" },
  { selected: false, id: "4" },
  { selected: false, id: "5" },
];

for (let index = 0; index < store.length; index++) {
  if (store[index].selected !== true) {
    console.log(index);

    for (let ind = 0; ind < index.length; ind++) {
      store.splice(ind, 1);
      console.log(ind);
    }
  }
}

console.log(store);

const indices = store.reduce((init, item, index) => {
  if (item.selected === true) {
    init.push(index);
  }
  return init;
}, []);

for (let i = indices.length - 1; i >= 0; i--) store.splice(indices[i], 1);

// indices.forEach(index => {
//   console.log(index);
//   store.pop(index, 0);
// });
console.log(store);
// var arr = [5, 10, 2, 7];

// var indeces = arr.reduce((acc, curr, index) => {
//   if (curr < 10) {
//     acc.push(index);
//   }
//   return acc;
// }, []);

// console.log(indeces);
