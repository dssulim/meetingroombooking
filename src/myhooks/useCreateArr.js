export function useCreateArr(start, end){
    let newArr = [];
    for (let i = start; i <= end; i++){
        newArr[i] = i;
    }
    return newArr;
}

