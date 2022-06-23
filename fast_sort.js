const arr = [1, 3, 643, 6, 21, 5 ,3, 5, 8, 3, 1]

const fast_sort = (array) =>{
    if (array.length <= 1){
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let better = []
    for (let i = 0; i < array.length; i++) {
        if(pivotIndex === i)
            continue
        if(pivot > array[i]) {
            less.push(array[i])
        }else {
            better.push(array[i])
        }
    }
    return [...fast_sort(less), pivot, ...fast_sort(better)]
}

console.log(fast_sort(arr))