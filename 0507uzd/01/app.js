function findLongestString(wordString){
    StringArray = wordString.split(' ');
    console.log(StringArray);
    let longestString = '';
    for (let i = 0; i < StringArray.length; i++){
        if (StringArray[i].length > longestString.length){
            longestString = StringArray[i];
        }
    }
    return longestString
}

console.log(findLongestString('This is a sample sentence dssdqfefrfwer asdfipjvadsjcdasjci[dsjc'));