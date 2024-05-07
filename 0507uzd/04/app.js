function titleCase(sentence){
    splitSentence = sentence.split(' ')
    capitalizedSentence = ''
    for (let i = 0; i < splitSentence.length; i++){
        splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1)
        returnSentence = splitSentence.join(" ")
    }
    return returnSentence
}

console.log(titleCase('this is a sample sentence')); // Output: "This Is A Sample Sentence"