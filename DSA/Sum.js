function twoSum(num, target){
    for(let i = 0; i < num.length; i++){
        for(let j = i +1; j < num.length; j++){
            if(num[i]+num[j] === target){
                return[i, j];
            }
        }
    }
}

console.log(twoSum([1,2,3,4],9))



// Merged and sort Two array
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


function sortTwoArray(arr1, arr2){
    const merged = [];
    let i = 0, j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            merged.push(arr1[i])
            i ++;
        }
        else{
            merged.push(arr2[j])
            j ++;
        }
    }
    while(i < arr1.length){
        merged.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        merged.push(arr2[j]);
        j ++
    }
    return merged;
}

console.log(sortTwoArray([1,2,3],[1,3,4]))