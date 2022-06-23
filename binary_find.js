let array = [1, 2, 5, 6, 8, 9, 10, 11, 17]
let count = 0

const binary_find = (array, item) =>{
    let position = -1
    let finded = false
    let start = 0
    let middle;
    let end = array.length

    while(finded === false && start <= end){
        middle = Math.floor((start + end) / 2)
        count += 1
        if (array[middle] === item){
            position = middle
            finded = true
            return position
        }
        if( item < array[middle]){
            end = middle - 1
        }else {
            start = middle + 1
        }
    }
    return position
}

const recursiveBinarySearch = (array, item, start, end) =>{
    let middle = Math.floor((start + end) / 2)
    if(item === array[middle]){
        return middle
    }
    if(item < array[middle]){
        return recursiveBinarySearch(array, item, 0, middle - 1)
    }else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}
console.log(recursiveBinarySearch(array, 17, 0, array.length))

console.log(binary_find(array, 17))
console.log(count)

