let arrayList = [1,5,6,7,9,10,29,70,77,79,99,101,105,106,108,109,120,121,122,129,140];
const targeted = 1000;

function binarySearch(array, target){
    let rightpointer = array.length-1;
    let leftpointer = 0;


            while(leftpointer <= rightpointer){
                let middlepointer = Math.floor((leftpointer+rightpointer)/2);
                
                if(target === array[middlepointer]){
                   return `${target} is in the list`;
                }
                else if(target > array[middlepointer]){
                    leftpointer = middlepointer +1;
                }
                else if (target < array[middlepointer]){
                   rightpointer = middlepointer-1;
                }
            }

        return `${target} is not in the list`;
}

const result = binarySearch(arrayList,targeted);
console.log(result)