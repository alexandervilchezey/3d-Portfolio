import { performance } from "perf_hooks";

function test(arrData) {
  let multiArray = [];
  let miniArray = [];

  let newData = [...arrData];
  newData.shift();

  let par = true;
  for (let index = 1; index < arrData[0] + 1; index++) {
    par = !par;
    let choco = newData.indexOf(index) > -1 ? index : "X";
    if (par) {
      miniArray.push(choco);
      multiArray.push(miniArray);
      miniArray = [];
    } else {
      miniArray.push(choco);
    }
  }
  let counter = 0;
  for (let index = 0; index < Math.ceil(arrData[0] / 2); index++) {
    if (multiArray[index][0] === "X" && multiArray[index][1] === "X") {
      counter++;
    }

    if (
      multiArray[index + 1] &&
      multiArray[index][0] === "X" &&
      multiArray[index + 1][0] === "X"
    ) {
      counter++;
    }

    if (
      multiArray[index + 1] &&
      multiArray[index][1] === "X" &&
      multiArray[index + 1][1] === "X"
    ) {
      counter++;
    }
  }
  return counter;
}

var startTime = performance.now();
test([12, 5, 6, 7, 8]);
var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
