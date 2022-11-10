function SmallestSumWith(array,target){
    let j=0;
    let set = [array[j]];
    let resultingLength = 
    array.length;
    const track = new Map();
    for(let i=1; i<=array.length; i++){
        set.push(array[i]);
        let resultingsum = set.reduce((x,y)=>{
            return x+y;
        })
        if(resultingsum>=target && set.length<=resultingLength){
            resultingLength = set.length;
            track.set('minlength',set.length);
            j=i;
            set = [array[j]];
        }
    }
    console.log(track.get('minlength'))
}
SmallestSumWith([1,2,3,4,5,6,7,8,9,10,20], 20)