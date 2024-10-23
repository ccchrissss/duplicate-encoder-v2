function duplicateEncode(word){
  
  let wordArr = word.toLowerCase().split('')

  // console.log(wordArr)
  
  let newWord = wordArr.map( e => { 
    return wordArr.indexOf(e) === wordArr.lastIndexOf(e) ? '(' : ')'
  })

  // console.log(newWord)

  return newWord.join('')

}

console.log(duplicateEncode('banana'))


// taking in word - a string
// return a new string - containing only '(' and ')' 

// e.g. 
  // duplicateEncode('banana')
  // results in '()))))'

  // duplicateEnvoke('aardvark')
  // results in ')))(())('

// declare a variable newWord
  // assign it to word, which we will split into an array
  // then we will use the map method upon it
    // callback: compare first and last index of current element
    // if they are the same, reassign current element to '('
    // else, reassign current element to ')'
// return newWord.join('')