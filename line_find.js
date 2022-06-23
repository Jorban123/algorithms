const arr = [1, 3, 5, 6, 7, 1, 5, 8 ,9, 11]

let find_line = (arr, elem) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === elem){
            return i
        }
    }
    return null
}

console.log(find_line(arr, 8))
