const swapvalue = require('./swapValue');

function partition(array,low,high){
    let j = 0;
    let i = low-1;
    while(j <= high){
        if(array[j] <= array[high]){
            i++;
            swapvalue(array,i,j);
        }
        else if(j >= high){
            swapvalue(array,i+1,high);
            return (i+1);
        }
        j++;
    }
    
}
module.exports = partition;

