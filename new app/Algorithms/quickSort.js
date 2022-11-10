
const partition = require('./partition');

let array = [2,3,5,3,677,543,76,532,221,77,544,300,350]
let p = array.length-1;
function quickSort(array,low,high){
    if(low < high){
        let result = partition(array,low,high);
       

        quickSort(array,low,result-1);
        quickSort(array,result+1,high);
    }
    return array;
}
const result = quickSort(array,0,p);
console.log(result);