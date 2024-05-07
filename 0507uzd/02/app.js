function findMaxNumero(numbers){
    let largestNumero = ''
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] > largestNumero){
            largestNumero = numbers[i]
        }
    }
    return largestNumero
}

console.log(findMaxNumero([3, 7, 1, 9, 4,1111]));