const arrayList = [1,2,27,3,4,5,6,7,8,9,10,100,23];
let highestSum = 0;
function KLengthWindowSum(){
    for(let i=0; i<=arrayList.length; i++){
        let result = [arrayList[i],arrayList[i+1],arrayList[i+2]]
        let newHighestSum = result.reduce((x,y)=>{
            return x+y
        })
        if(newHighestSum>highestSum){
            highestSum = newHighestSum
        }
        else if(i>=arrayList.length-1){
            break;
        }
    }
    return highestSum;
}
const newresult = KLengthWindowSum();
console.log(newresult);