function reverseString(stringInput){
    stringArray = stringInput.split('');
    reversedArray = stringArray.reverse();
    returnedString = reversedArray.join('');
    return returnedString
}

console.log(reverseString('Helloworld')); // Output: "olleH"